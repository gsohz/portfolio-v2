import { DevToLogo, List } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { ALinkNav } from "./ALinkNav";

export function Navbar() {
  const [section, setSection] = useState("inicio");
  const [viewMenu, setViewMenu] = useState(false);

  const handleClickMenu = (status: boolean) => {
    setViewMenu(status);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicos", "projetos", "contato", "sobre"];
      let currentSection = section;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        currentSection = sections[sections.length - 1];
      } else {
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
      }

      setSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styleMenu =
    "flex flex-col translate-y-36 mt-3 bg-white h-fit min-w-32 px-2 py-4 shadow-xl";

  return (
    <div className="bg-white w-full h-16 flex fixed px-2 z-50">
      <div className="flex w-full items-center gap-3 pl-4 lg:pl-20">
        <DevToLogo size="48" className="text-[#A8A8A8]" />
        <span className="font-montserrat text-2xl">Gabriel Ferreira</span>
      </div>
      <div className="relative flex justify-end items-center w-auto">
        <button
          className="flex items-center h-full text-black lg:hidden"
          onClick={() => handleClickMenu(!viewMenu)}
        >
          <List size="44" />
        </button>
        <div
          className={`absolute lg:h-full lg:py-0 lg:relative lg:flex lg:flex-row lg:pr-28 lg:mt-0 lg:translate-y-0 lg:shadow-none items-center gap-5 transform transition-opacity duration-200 ${
            viewMenu
              ? styleMenu + " opacity-100"
              : styleMenu +
                " opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
          }`}
        >
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
