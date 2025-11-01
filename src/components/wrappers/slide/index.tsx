import type { HTMLAttributes } from "react";

type Dir = "left" | "right" | "top" | "bottom";

type Speed = "xs" | "sm" | "md" | "lg";

const dirMapper = {
  left: "slide-left",
  right: "slide-right",
  top: "slide-up",
  bottom: "slide-down",
} as Record<Dir, string>;

const delayMapper = {
  xs: "delay-xs",
  sm: "delay-sm",
  md: "delay-md",
  lg: "delay-lg",
} as Record<Speed, string>;

const speedMapper = {
  xs: "speed-xs",
  sm: "speed-sm",
  md: "speed-md",
  lg: "speed-lg",
} as Record<Speed, string>;

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: Dir;
  delay?: Speed;
  speed?: Speed;
}

const mapClassNames = (direction?: Dir, delay?: Speed, speed?: Speed) => {
  return `slide ${dirMapper[direction!] || ""} ${delayMapper[delay!] || ""} ${
    speedMapper[speed!] || ""
  }`.trim();
};

const Index = ({
  children,
  direction,
  delay,
  className = "",
  speed,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={`${className} ${mapClassNames(
        direction,
        delay,
        speed
      )}`.trim()}
    >
      {children}
    </div>
  );
};

export default Index;
