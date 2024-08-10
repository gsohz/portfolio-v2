import { ReactNode } from "react";

export interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className="w-screen md:w-full px-10 md:px-14 lg:px-28 h-auto pb-12">
      {children}
    </main>
  );
}
