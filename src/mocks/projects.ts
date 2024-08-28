import projetoSistemaERP from "../assets/sistemaERP.svg";
import websiteGospelContabil from "../assets/gospelContabilWebsite.svg";

export interface Project {
  title: string;
  img: string;
  category: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Gospel Contábil",
    category: "website",
    img: websiteGospelContabil,
    description:
      "Website de apresentação personalizado para a empresa Gospel Contábil, que oferece contabilidade para igrejas e ONGs com assessoria personalizada e soluções fiscais.",
    link: "https://gospelcontabil.com.br/",
  },
  {
    title: "Gerenciamento Empresarial",
    category: "sistema",
    img: projetoSistemaERP,
    description:
      "Sistema ERP personalizado para a empresa júnior Guará Júnior do IFSP Cubatão. Este projeto é uma plataforma de gestão empresarial que centraliza a autenticação e o controle de acesso dos usuários, o gerenciamento de projetos e usuários, a gestão financeira, e o controle de estoque, garantindo eficiência e segurança em todas as operações.",
  },
];

export default projects;
