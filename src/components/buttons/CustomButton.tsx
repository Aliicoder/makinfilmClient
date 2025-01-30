import React, { CSSProperties, PropsWithChildren, forwardRef } from 'react';

interface ButtonProps extends PropsWithChildren {
  text?: string;
  style?:CSSProperties
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  direction?: "left" | "right";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children , style , className, disabled = false, text, direction = "right", type, onClick }, ref) => {
    return (
      <button  style={style} ref={ref} type={type} disabled={disabled} className={className} onClick={onClick}>
        {direction === "left" && children}
        {text && <span>{text}</span>}
        {direction === "right" && children}
      </button>
    );
  }
);

export default CustomButton;