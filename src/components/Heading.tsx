import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-3xl xl:text-4xl font-montserrat font-bold text-secondary">
      {children}
    </h1>
  );
}
