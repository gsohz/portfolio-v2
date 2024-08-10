import { ReactNode } from "react";

interface ALinkNavProps {
  children: ReactNode;
  section: string;
  currentSection: string;
  href: string;
}

export function ALinkNav({
  section,
  currentSection,
  href,
  children,
}: ALinkNavProps) {
  return (
    <a
      href={href}
      className={`flex p-1 h-full items-center ${
        section === currentSection
          ? "border-b-4 border-solid border-primary text-primary font-bold"
          : ""
      }`}
    >
      {children}
    </a>
  );
}
