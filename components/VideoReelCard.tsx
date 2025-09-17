import { useEffect, useState, useRef } from "react";

import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import ReelTestimonial from "./ReelTestimonial";

declare global {
  interface Window {
    _wq?: any[];
  }
}

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
  hasTestimonial = false,
  testimonialText = "",
  testimonialImageSrc = "1.jpg",
  authorName = "Jeremiah Smith",
  authorRole = "CEO, Company Name",
  rating = 5,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<WistiaVideo | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      console.log("mobile");
      setIsMobile(true);
    }
  }, []);

  // Wait for Wistia API to be ready and get video reference
  useEffect(() => {
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
  }, [videoId]);

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
    <div className="reel-card">
      <div className="reel-wrapper" style={{ aspectRatio: aspectRatio }}>
        <div
          className={`wistia_embed wistia_async_${videoId} plugin_wistiaLogo=false volumeControl=false autoPlay=false`}
          style={{ height: "100%", width: "100%", scale: "1.2" }}
          onClick={handleMute}
        ></div>

        <div className="reel-overlay">
          <div className="reel-info">
            <span className="reel-metric">{views} views</span>
            <span className="reel-platform">{platform}</span>
          </div>

          {/* Mute/Unmute Icon */}
          <button
            onClick={handleMute}
            className="mute-button"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              // Muted Icon (speaker with X)
              <MdVolumeOff size={24} color="white" />
            ) : (
              // Unmuted Icon (speaker with sound waves)
              <MdVolumeUp size={24} color="white" />
            )}
          </button>
        </div>
      </div>

      {hasTestimonial && (
        <ReelTestimonial
          testimonialText={testimonialText}
          testimonialImageSrc={testimonialImageSrc}
          authorName={authorName}
          authorRole={authorRole}
          rating={rating}
        />
      )}
    </div>
  );
};

export default VideoReelCard;
