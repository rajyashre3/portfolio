import React, { useMemo } from "react";

interface Props {
  items: React.ReactNode[];
  height?: string;
}

const Index = ({ items, height }: Props) => {
  const list = useMemo(() => {
    return items.map((item, i) => {
      return (
        <span
          key={i}
          className="flex-1"
          style={height ? { lineHeight: "20px" } : {}}
        >
          {item}
        </span>
      );
    });
  }, [items, height]);

  return (
    <>
      <div className="marquee motion-reverse relative top-0 left-0 h-full w-full flex">
        {list}
        <div className="absolute top-0 left-full h-full w-full flex">
          {list}
        </div>
        <div className="absolute top-0 -left-full h-full w-full flex">
          {list}
        </div>
      </div>
    </>
  );
};

export default Index;
