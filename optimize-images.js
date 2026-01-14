const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public', 'gallery-images');

if (!fs.existsSync(directoryPath)) {
    console.error('Directory not found:', directoryPath);
    process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const filePath = path.join(directoryPath, file);
            const tempPath = path.join(directoryPath, 'temp_' + file);

            console.log(`Processing: ${file}`);

            sharp(filePath)
                .resize({ width: 1920, withoutEnlargement: true }) // Resize to max 1920px width
                .jpeg({ quality: 80, mozjpeg: true }) // Compress to 80% quality
                .toFile(tempPath)
                .then(() => {
                    // Replace original file with optimized one
                    fs.unlinkSync(filePath);
                    fs.renameSync(tempPath, filePath);
                    console.log(`Optimized: ${file}`);
                })
                .catch(err => {
                    console.error(`Error processing ${file}:`, err);
                });
        }
    });
});
