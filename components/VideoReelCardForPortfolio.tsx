import { useEffect, useState, useRef } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    _wq?: any[];
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface VideoReelCardForPortfolioProps {
  type?: string;
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

const VideoReelCardForPortfolio: React.FC<VideoReelCardForPortfolioProps> = ({
  type = "video",
  aspectRatio = "9/16",
  videoId,
  views,
  platform = "TikTok",
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  // Wait for Wistia API to be ready and get video reference (only for videos)
  useEffect(() => {
    if (!isVisible || type === "image") return;

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
  }, [videoId, isMuted, isVisible, type]);

  return (
    <div
      ref={containerRef}
      className="relative opacity-0 translate-y-10 animate-[fadeInUp_0.8s_ease_forwards] break-inside-avoid"
    >
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-primary transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] cursor-pointer hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] tap-highlight-transparent w-[180px] h-[240px] md:w-[310px] md:h-[388px]"
        style={{ aspectRatio: aspectRatio }}
      >
        <div className="relative w-[180px] h-[240px] md:w-[310px] md:h-[388px] rounded-xl overflow-hidden">
          {/* Skeleton placeholder */}
          {!isVisible && (
            <div className="absolute inset-0 bg-gray-300">
              <div className="absolute inset-0 animate-shimmer" />
            </div>
          )}

          {/* Conditional rendering: Image or Video */}
          {isVisible && type === "image" ? (
            <img
              src={videoId}
              alt={`${platform} content`}
              className="w-[180px] h-[240px] md:w-[310px] md:h-[388px] object-cover transition-opacity duration-500 ease-in-out"
              style={{ opacity: imageLoaded ? 1 : 0 }}
              onLoad={() => setImageLoaded(true)}
            />
          ) : (
            isVisible && (
              <div
                className={`wistia_embed wistia_async_${videoId} plugin_wistiaLogo=false autoPlay=false w-[180px] h-[240px] md:w-[310px] md:h-[388px] scale-x-107 transition-opacity duration-500 ease-in-out`}
                style={{ opacity: !isVisible ? 0 : 1 }}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoReelCardForPortfolio;