import { ReactNode } from "react";

interface ALinkProps {
  children: ReactNode;
  href: string;
}

export function ALink({ children, href }: ALinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-1 border-solid border-2 border-black py-2 px-4 rounded-lg cursor-pointer hover:bg-primary hover:text-white hover:border-black/0 shadow-lg"
    >
      {children}
    </a>
  );
}
