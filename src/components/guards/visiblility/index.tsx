import React, { useState, type HTMLAttributes } from "react";

import Visible from "../../wrappers/visible";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onVisibile?: () => void;
}

const Index = ({ children, onVisibile = () => {}, ...rest }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <Visible
      onVisible={() => {
        onVisibile?.();
        setShow(true);
      }}
      {...rest}
    >
      {show ? children : null}
    </Visible>
  );
};

export default Index;
