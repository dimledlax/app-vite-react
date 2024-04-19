import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function Button({onClick, children}: ButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

