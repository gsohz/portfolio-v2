import { DevToLogo, List } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { ALinkNav } from "./ALinkNav";

export function Navbar() {
  const [section, setSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "projetos", "contato", "sobre"];
      let currentSection = section;

      for (let i = 0; i < sections.length; i++) {
        const sectionElement = document.getElementById(sections[i]);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 130) {
            currentSection = sections[i];
            break;
          }
        }
      }

      setSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white w-full h-16 flex justify-between fixed px-2 z-50">
      <div className="flex w-fit items-center gap-3 pl-4 md:pl-20">
        <DevToLogo size="48" className="text-[#A8A8A8]" />
        <span className="font-montserrat text-2xl">Gabriel Ferreira</span>
      </div>
      <div>
        <List
          size="44"
          className="flex items-center h-full mr-4 text-black md:hidden"
        />
        <div className="md:flex h-full w-fit items-center gap-5 md:pr-8 hidden">
          <ALinkNav
            currentSection={section}
            href="#inicioAncora"
            section="inicio"
          >
            INÍCIO
          </ALinkNav>
          <ALinkNav
            currentSection={section}
            href="#servicosAncora"
            section="servicos"
          >
            SERVIÇOS
          </ALinkNav>
          <ALinkNav
            currentSection={section}
            href="#projetosAncora"
            section="projetos"
          >
            PROJETOS
          </ALinkNav>
          <ALinkNav
            currentSection={section}
            href="#contatoAncora"
            section="contato"
          >
            CONTATO
          </ALinkNav>
          <ALinkNav
            currentSection={section}
            href="#sobreAncora"
            section="sobre"
          >
            SOBRE
          </ALinkNav>
        </div>
      </div>
    </div>
  );
}
