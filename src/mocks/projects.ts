import projetoSistemaERP from "../assets/sistemaERP.svg";

export interface Project {
  title: string;
  img: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Gerenciamento Empresarial",
    img: projetoSistemaERP,
    description:
      "Sistema ERP personalizado para a empresa júnior Guará Júnior do IFSP Cubatão. Este projeto é uma plataforma de gestão empresarial que centraliza a autenticação e o controle de acesso dos usuários, o gerenciamento de projetos e usuários, a gestão financeira, e o controle de estoque, garantindo eficiência e segurança em todas as operações.",
  },
];

export default projects;
