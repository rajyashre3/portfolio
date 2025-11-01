// #65FF0B

import { useEffect, useRef } from "react";
import Resizer from "../../common/resizer";

interface Props {
  imageSrc: string;
  video: HTMLVideoElement;
  aspectRatio: number;
}

const Index = ({ imageSrc, video, aspectRatio }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      if (canvasRef.current) {
        const width = canvasRef.current.width;
        const height = canvasRef.current.height;
        const ctx = canvasRef.current.getContext("2d");
        video.play();
        const videoCanvas = document.createElement("canvas");
        videoCanvas.width = width;
        videoCanvas.height = height;
        const vctx = videoCanvas.getContext("2d");

        const renderFrame = () => {
          if (ctx && vctx) {
            ctx.drawImage(img, 0, 0, width, height);
            vctx.drawImage(video, 0, 0, width, height);

            const imgData = ctx.getImageData(0, 0, width, height);
            const vidData = vctx.getImageData(0, 0, width, height);

            const data = imgData.data;
            const vdata = vidData.data;

            for (let i = 0; i < data.length; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];

              // simple green detection threshold
              if (g > 200 && r < 80 && b < 80) {
                // replace with video pixel
                data[i] = vdata[i];
                data[i + 1] = vdata[i + 1];
                data[i + 2] = vdata[i + 2];
                data[i + 3] = vdata[i + 3]; // copy alpha too
              }

              ctx.putImageData(imgData, 0, 0);

              requestAnimationFrame(renderFrame);
            }
          }
        };
        renderFrame();
      }
    };
  }, []);
  return (
    <Resizer
      aspectRatio={aspectRatio}
      render={({ height, width }) => {
        return <canvas ref={canvasRef} width={width} height={height} />;
      }}
    />
  );
};

export default Index;
