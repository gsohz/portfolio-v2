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
      className="flex items-center gap-1 outline outline-2 outline-black py-2 px-4 rounded-lg cursor-pointer hover:bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-cyanStart to-cyanEnd hover:text-white hover:outline-none  shadow-lg transition-colors duration-300"
    >
      {children}
    </a>
  );
}
