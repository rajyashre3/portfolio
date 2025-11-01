import { type HTMLAttributes } from "react";

import { useVisible } from "../../../hooks/useVisible";

interface IntersectionProps {
  root: Element;
  rootMargin: string;
  threshold: number;
  once: boolean;
}

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    Partial<IntersectionProps> {
  onVisible: () => void;
}

const Index = ({
  onVisible,
  children,
  root,
  rootMargin,
  threshold,
  once = true,
  ...props
}: Props) => {
  const ref = useVisible(onVisible, { root, rootMargin, threshold, once });

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default Index;
