import React, { useLayoutEffect, useRef, useState } from "react";

interface RenderProps {
  render: (dimension: Dim) => React.ReactNode;
}

type Dim = {
  width: string;
  height: string;
};

type IAspectRatio = {
  aspectRatio: number;
} & Partial<Dim>;

type Props = (Dim | IAspectRatio) & RenderProps;

const Index = ({ render, ...rest }: Props) => {
  const [dim, setDim] = useState<Dim>({} as Dim);
  const ref = useRef<HTMLDivElement>(null);

  const toPixel = (n: number) => {
    return n.toString().concat("px");
  };

  useLayoutEffect(() => {
    const handler = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setDim({ width: toPixel(width), height: toPixel(height) });
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  const style =
    "aspectRatio" in rest
      ? { aspectRatio: rest.aspectRatio, width: rest.width }
      : {
          width: rest.width,
          height: rest.height,
        };

  return (
    <div ref={ref} style={style}>
      {render(dim)}
    </div>
  );
};

export default Index;
