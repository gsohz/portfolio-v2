import developmentLogo from "./assets/developmentLogo.svg";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import {
  ArrowRight,
  ChatsCircle,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Heading } from "./components/Heading";
import Card from "./components/Card";
import services from "./mocks/services";
import projects from "./mocks/projects";
import { ProjectApresentation } from "./components/ProjectApresentation";
import { ALink } from "./components/ALink";

function App() {
  return (
    <>
      <Navbar />
      <section id="inicioAncora"></section>
      <Container>
        <Main>
          <section
            id="inicio"
            className="flex gap-12 lg:gap-32 xl:gap-56 justify-center items-center md:mx-12 mt-12 xl:mt-24"
          >
            <img
              src={developmentLogo}
              className="hidden md:block lg:w-72 xl:w-96"
              alt="Logo construção de site"
            />
            <p className="flex flex-col gap-2 max-w-[480px] ">
              <span className="text-5xl xl:text-7xl text-primary font-montserrat font-bold">
                Olá!
              </span>{" "}
              <span className="text-3xl xl:text-4xl leading-10 xl:leading-[3.5rem]">
                Eu sou Gabriel, um desenvolvedor de sites.
              </span>
              <a
                href="#contato"
                className="text-2xl xl:text-3xl text-primary font-bold flex items-center gap-1 hover:text-secondary"
              >
                Entre em contato
                <ArrowRight size={32} weight="bold" />
              </a>
            </p>
          </section>

          <div id="servicosAncora"></div>
          <section id="servicos" className="flex flex-col mt-20 gap-9">
            <Heading>SERVIÇOS</Heading>
            <div className="flex flex-wrap lg:flex-nowrap gap-24 justify-center">
              {services.map((service, index) => (
                <Card
                  key={index}
                  title={service.title}
                  topics={service.topics}
                />
              ))}
            </div>
          </section>

          <div id="projetosAncora"></div>
          <section id="projetos" className="flex flex-col mt-16 gap-9">
            <Heading>PROJETOS</Heading>

            {projects.map((project, index) => (
              <ProjectApresentation key={index} {...project} />
            ))}
          </section>

          <div id="contatoAncora" className="h-9"></div>
          <section id="contato" className="mt-16 text-lg md:text-2xl">
            <div className="font-bold text-black flex flex-col gap-4">
              <p>Está precisando de um site para divulgar seu produto?</p>
              <p>Precisa de um desenvolvedor para implementar seu sistema?</p>
            </div>
            <div className="absolute left-0 w-full h-96 bg-secondary flex translate-y-16 shadow-lg">
              <div className="relative flex flex-col md:flex-row w-full justify-center items-center md:justify-around gap-7 md:px-12">
                <p className="max-w-[25rem] flex flex-col justify-center items-center md:items-start ">
                  <span className="font-montserrat font-bold text-white text-center md:text-start text-4xl text-wrap md:text-6xl">
                    ENTRE EM CONTATO
                  </span>
                  <span>e faça seu orçamento.</span>
                </p>
                <ChatsCircle className="absolute -z-10 -translate-y-16 md:-translate-y-0 text-black/15 size-56" />
                <div className="flex flex-col gap-4 md:gap-6 justify-center items-center text-sm md:text-lg">
                  <div className="bg-white w-fit p-2 md:p-3 px-3 md:px-4 rounded-lg flex items-center gap-2 shadow-lg">
                    <Envelope className="size-7 md:size-9" weight="thin" />
                    <span>ga.ferreira.desouza@gmail.com</span>
                  </div>

                  {/* 
                  <div className="bg-white w-fit p-2 md:p-3 px-3 md:px-4 rounded-lg flex items-center gap-2 shadow-lg">
                    <WhatsappLogo className="size-7 md:size-9" weight="thin" />
                    <span>(13) </span>
                  </div>
                    */}
                </div>
              </div>
            </div>
            <div className="h-[29rem]"></div>
          </section>

          <div id="sobreAncora"></div>
          <section id="sobre" className="flex flex-col pt-20 gap-9 mb-12">
            <Heading>SOBRE</Heading>

            <div className="text-lg md:text-2xl leading-10 flex flex-col gap-6">
              <p>
                Olá, sou{" "}
                <span className="font-montserrat font-bold text-primary">
                  GABRIEL FERREIRA!
                </span>{" "}
              </p>
              <p>
                Sou desenvolvedor Full-Stack com experiência em JavaScript,
                Java, TypeScript, PHP e React. Formado em Análise e
                Desenvolvimento de Sistemas pelo IFSP, trago uma combinação de
                habilidades técnicas e visão analítica para criar soluções
                inovadoras e eficientes.
              </p>
              <p>
                Fique à vontade para conhecer mais sobre meu trabalho e
                conectar-se comigo através das minhas redes sociais:
              </p>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-center gap-8 md:gap-32 text-sm md:text-xl">
              <ALink href="https://github.com/gsohz">
                <GithubLogo size={35} /> github.com/gsohz
              </ALink>
              <ALink href="https://linkedin.com/in/gabsouza4">
                <LinkedinLogo size={35} /> linkedin.com/in/gabsouza4
              </ALink>
            </div>
          </section>

          <div className="w-full mt-14 md:mt-20">
            <footer className="absolute left-0 w-full h-16 bg-secondary"></footer>
          </div>
        </Main>
      </Container>
    </>
  );
}

export default App;
