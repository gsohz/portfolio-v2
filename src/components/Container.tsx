import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`flex min-h-fit h-auto w-full bg-white pt-20 ${className}`}>
      {children}
    </div>
  );
}
