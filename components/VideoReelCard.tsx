import { useEffect, useState, useRef } from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    _wq?: any[];
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface VideoReelCardProps {
  aspectRatio: string;
  videoId: string;
  views: string;
  platform: string;
  hasTestimonial: boolean;
  testimonialText?: string | null;
  testimonialImageSrc?: string | null;
  authorName?: string | null;
  authorRole?: string | null;
  rating?: number;
}

interface WistiaVideo {
  mute?: () => void;
  unmute?: () => void;
  volume?: (level: number) => void;
}

const VideoReelCard: React.FC<VideoReelCardProps> = ({
  aspectRatio = "9/16",
  videoId,
  views,
  platform = "TikTok",
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<WistiaVideo | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Load slightly before entering viewport
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Wait for Wistia API to be ready and get video reference
  useEffect(() => {
    if (!isVisible) return;

    // Initialize Wistia queue if it doesn't exist
    window._wq = window._wq || [];

    window._wq.push({
      id: videoId,
      onReady: (video: WistiaVideo) => {
        videoRef.current = video;
        console.log("Wistia video ready", video);

        // Set initial mute state
        try {
          if (typeof video.mute === "function") {
            if (isMuted && typeof video.mute === "function") {
              video.mute();
            } else if (!isMuted && typeof video.unmute === "function") {
              video.unmute();
            }
          } else if (typeof video.volume === "function") {
            video.volume(isMuted ? 0 : 1);
          }
        } catch (error) {
          console.error("Error setting initial mute state:", error);
        }
      },
    });

    return () => {
      // Cleanup: remove from _wq queue
      if (window._wq) {
        window._wq = window._wq.filter((item) => item.id !== videoId);
      }
    };
  }, [videoId, isMuted, isVisible]);

  const handleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    // Control the actual Wistia video
    if (videoRef.current) {
      try {
        if (newMutedState) {
          // Mute the video
          if (typeof videoRef.current.mute === "function") {
            videoRef.current.mute();
          } else if (typeof videoRef.current.volume === "function") {
            videoRef.current.volume(0);
          }
        } else {
          // Unmute the video
          if (typeof videoRef.current.unmute === "function") {
            videoRef.current.unmute();
          } else if (typeof videoRef.current.volume === "function") {
            videoRef.current.volume(1);
          }
        }
        console.log("Video mute state changed to:", newMutedState);
      } catch (error) {
        console.error("Error controlling video mute state:", error);
        console.log(
          "Available methods:",
          Object.getOwnPropertyNames(videoRef.current)
        );
      }
    } else {
      console.warn("Video reference not available");
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative opacity-0 translate-y-10 animate-[fadeInUp_0.8s_ease_forwards] break-inside-avoid mb-4 sm:mb-6 lg:mb-8"
    >
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-primary scale-100 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] cursor-pointer hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] tap-highlight-transparent w-[259px] h-[316px]"
        style={{ aspectRatio: aspectRatio }}
      >
        {isVisible ? (
          <div
            className={`wistia_embed wistia_async_${videoId} plugin_wistiaLogo=false volumeControl=false autoPlay=false w-[259px] h-[316px] transition-[filter] duration-300 ease-in-out hover:brightness-110`}
            onClick={handleMute}
          ></div>
        ) : (
          <div className="w-[259px] h-[316px] bg-black flex items-center justify-center text-gray-400 text-sm">
            🎬 Loading video...
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none [&>*]:pointer-events-auto">
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end text-white text-xs sm:text-sm font-medium z-[2]">
            <span className="flex items-center gap-2 before:content-['👁'] before:text-sm sm:before:text-base">
              {views} views
            </span>

            <span className="py-1 px-2 sm:py-1 sm:px-3 bg-white/20 backdrop-blur-[10px] rounded-xl text-xs sm:text-xs relative overflow-hidden">
              {platform}
            </span>
          </div>

          {/* Mute/Unmute Button */}
          {/* <button
            onClick={handleMute}
            className="absolute top-3 right-3 bg-black/60 border-none rounded-full w-11 h-11 flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out backdrop-blur-[4px] z-10 hover:bg-black/80 hover:scale-105 active:scale-95"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <MdVolumeOff size={24} color="white" className="transition-opacity duration-200 ease-in-out hover:opacity-90" />
            ) : (
              <MdVolumeUp size={24} color="white" className="transition-opacity duration-200 ease-in-out hover:opacity-90" />
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default VideoReelCard;
