import HLSPlayer from '../../components/HLSPlayer';
import ChemistryBackground from '../../components/ChemistryBackground';

export const metadata = {
    title: 'Gallery - Renomate Dialysis',
    description: 'View our product demonstrations and gallery.',
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-32 px-4 flex flex-col items-center justify-center relative overflow-hidden">
            <ChemistryBackground />
            <div className="w-full max-w-7xl mx-auto space-y-8 relative z-10">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Product <span className="text-blue-600">Gallery</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Experience our advanced dialysis solutions in action. Watch the demonstration below to see our commitment to quality and innovation.
                    </p>
                </div>

                {/* Video Player Section */}
                <div className="w-full">
                    <HLSPlayer
                        src="/hls/index.m3u8"
                        poster="/image7.png" /* Using logo or any image as poster for now, user can change */
                    />
                </div>
            </div>
        </div>
    );
}
