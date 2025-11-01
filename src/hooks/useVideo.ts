import { useEffect, useRef, useState } from "react";

const useVideo = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [source, setSource] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setSource(src);
  }, [src]);

  useEffect(() => {
    if (!src) return;
    const v = videoRef.current;
    if (!v) return;
    v.volume = 0.5;

    const onPlay = () => setIsPlaying(true);
    const onPlaying = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("playing", onPlaying);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);

    // initialize state
    setIsPlaying(!v.paused && !v.ended && v.currentTime > 0);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const togglePlay = () => {
    if (!source) return;
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.play().catch(() => {
        /* autoplay may be blocked — handle if needed */
      });
    } else {
      v.pause();
    }
  };

  return {
    togglePlay,
    isPlaying,
    videoRef,
  };
};

export default useVideo;
