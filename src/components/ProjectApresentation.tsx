import { Project } from "../mocks/projects";

export function ProjectApresentation(project: Project) {
  return (
    <div className="mb-3 md:mb-12">
      <div className="mb-6">
        <span className="font-montserrat font-bold text-xl md:text-2xl text-primary">
          {"> "}
          {project.title.toUpperCase()}
        </span>
      </div>
      <p className="w-full xl:hidden md:px-8 pb-8 md:text-lg text-gray">
        {project.description}
      </p>
      <div className="flex items-center gap-3">
        <img src={project.img} alt="Imagem de exemplo mostrando Sistema ERP" />
        <p className="max-w-96 hidden xl:block px-8 font-bold text-lg text-gray">
          {project.description}
        </p>
      </div>
    </div>
  );
}
