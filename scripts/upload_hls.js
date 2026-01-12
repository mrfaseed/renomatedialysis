const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

try {
    const serviceAccountPath = path.join(__dirname, '../renomatedialysis-firebase-adminsdk-fbsvc-9261a03620.json');

    if (fs.existsSync(serviceAccountPath)) {
        const serviceAccount = require(serviceAccountPath);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            storageBucket: 'renomatedialysis.firebasestorage.app'
        });
        console.log('✅ Authenticated using service account key');
    } else {
        // Attempt to use application default credentials
        admin.initializeApp({
            projectId: 'renomatedialysis',
            storageBucket: 'renomatedialysis.firebasestorage.app'
        });
        console.log('ℹ️ Attempting to use default credentials (gcloud)...');
    }
} catch (error) {
    console.error('Error initializing Firebase Admin:', error.message);
    console.log('Ensure you have "service-account.json" in the root OR set GOOGLE_APPLICATION_CREDENTIALS');
    process.exit(1);
}

const bucket = admin.storage().bucket();
const LOCAL_DIR = path.join(__dirname, '../public/hls');
const REMOTE_PREFIX = 'hls';

async function configureCors() {
    console.log('Configuring CORS...');
    try {
        await bucket.setCorsConfiguration([
            {
                origin: ["*"],
                method: ["GET"],
                maxAgeSeconds: 3600
            }
        ]);
        console.log('✅ CORS configured.');
    } catch (error) {
        console.error('⚠️ Failed to set CORS (might need higher permissions):', error.message);
    }
}

async function uploadFile(filePath) {
    const fileName = path.basename(filePath);
    const destination = `${REMOTE_PREFIX}/${fileName}`;

    console.log(`Uploading ${fileName}...`);

    try {
        await bucket.upload(filePath, {
            destination: destination,
            public: true, // Make the file public
            metadata: {
                cacheControl: 'public, max-age=3600',
                contentType: fileName.endsWith('.m3u8') ? 'application/vnd.apple.mpegurl' : 'video/MP2T'
            }
        });
        console.log(`✅ Uploaded: ${fileName}`);
    } catch (error) {
        console.error(`❌ Failed to upload ${fileName}:`, error.message);
        throw error;
    }
}

async function main() {
    if (!fs.existsSync(LOCAL_DIR)) {
        console.error(`Directory not found: ${LOCAL_DIR}`);
        return;
    }

    await configureCors();

    const files = fs.readdirSync(LOCAL_DIR);
    console.log(`Found ${files.length} files in ${LOCAL_DIR}`);

    for (const file of files) {
        if (file.endsWith('.ts') || file.endsWith('.m3u8')) {
            await uploadFile(path.join(LOCAL_DIR, file));
        }
    }

    console.log('\n🎉 Upload Complete!');
    console.log(`Your HLS URL: https://storage.googleapis.com/${bucket.name}/${REMOTE_PREFIX}/index.m3u8`);
}

main().catch(console.error);
