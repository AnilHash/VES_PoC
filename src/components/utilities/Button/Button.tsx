import React from "react";

import { btnVariant } from "./button.css";

export interface IButtonProps {
  variant: keyof typeof btnVariant;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ className, variant, children }) => {
  return (
    <button className={`${btnVariant[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
