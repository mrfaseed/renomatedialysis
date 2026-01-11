'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

export default function HLSPlayer({ src, poster }) {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeoutRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls;

        if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
                lowLatencyMode: true,
                backBufferLength: 90
            });
            hls.loadSource(src);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.log("Autoplay blocked:", e));
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (Safari)
            video.src = src;
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [src]);

    // Handle Time Update
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setDuration(total || 0);
            setProgress((current / total) * 100);
        }
    };

    // Toggle Play/Pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle Manual Seek
    const handleSeek = (e) => {
        const progressBar = e.currentTarget;
        const clickPosition = (e.nativeEvent.offsetX / progressBar.clientWidth);
        const newTime = clickPosition * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(clickPosition * 100);
    };

    // Toggle Mute
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Fullscreen
    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    // Handle Controls Visibility
    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 2500); // Hide after 2.5s of inactivity
        }
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div
            ref={containerRef}
            className="relative group w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-black aspect-video"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
        >
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
                poster={poster}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => {
                    setIsPlaying(false);
                    // Force a re-render to show replay icon if needed
                }}
                playsInline
                muted={isMuted}
                autoPlay
            />

            {/* Bottom Right Control Button (Apple Style) */}
            <div className="absolute bottom-6 right-6 z-20">
                <button
                    onClick={() => {
                        if (videoRef.current?.ended) {
                            videoRef.current.currentTime = 0;
                            videoRef.current.play();
                            setIsPlaying(true);
                        } else {
                            togglePlay();
                        }
                    }}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 group/btn"
                    aria-label={videoRef.current?.ended ? "Replay" : isPlaying ? "Pause" : "Play"}
                >
                    {videoRef.current?.ended ? (
                        <RotateCcw size={20} className="text-white/90 fill-white/0 stroke-[2.5]" />
                    ) : isPlaying ? (
                        <Pause size={20} className="text-white/90 fill-white/90" />
                    ) : (
                        <Play size={20} className="text-white/90 fill-white/90 ml-0.5" />
                    )}
                </button>
            </div>
        </div>
    );
}
