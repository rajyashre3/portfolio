import { useEffect, useRef, useState } from "react";

import { PauseIcon, PlayIcon } from "../../../icons";
import useVideo from "../../../hooks/useVideo";

interface Props {
  src: string;
  type?: string;
  icon: string;
  muted?: boolean;
}

const Index = ({ src, type = "video/mp4", icon, muted = true }: Props) => {
  const [source, setSource] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const buttonRef = useRef<HTMLDivElement>(null);
  const { isPlaying, togglePlay, videoRef } = useVideo({ src: source });

  useEffect(() => {
    containerRef.current?.addEventListener(
      "click",
      () => {
        setSource(src);
      },
      { once: true }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        className="w-full h-full peer"
        ref={videoRef}
        onClick={togglePlay}
        muted={muted}
        playsInline
      >
        {source && <source src={source} type={type}></source>}
      </video>
      {!source && (
        <div
          style={{ backgroundImage: `url(${icon})` }}
          className="absolute inset-0 top-0 z-10 left-0 object-cover bg-cover bg-no-repeat pointer-events-none"
        />
      )}
      <div
        ref={buttonRef}
        className={`peer-hover:opacity-100 ${
          !isPlaying ? "" : "opacity-0"
        } transition-opacity absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none`}
      >
        {isPlaying ? (
          <PauseIcon fontSize={"5em"} color="white" className="opacity-80" />
        ) : (
          <PlayIcon fontSize={"5em"} color="white" className="opacity-80" />
        )}
      </div>
    </div>
  );
};

export default Index;
