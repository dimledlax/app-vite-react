import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function LoadButton({onClick, children}: ButtonProps) {
  return (
    <button onClick={onClick} className="button-23">{children}</button>
  )
}


