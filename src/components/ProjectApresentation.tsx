import { fadeIn } from "../frame-variants";
import { Project } from "../mocks/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export function ProjectApresentation(project: Project) {
  return (
    <div className="mb-3 md:mb-12">
      <div className="mb-6">
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="font-montserrat font-bold text-xl md:text-2xl text-primary">
            {"> "}
            {project.category.toUpperCase()} {project.title.toUpperCase()}
          </span>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full xl:hidden md:px-8 pb-8 md:text-lg text-gray"
      >
        <div className="flex flex-col gap-4">
          <p>{project.description}</p>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              className="font-medium text-primary hover:text-secondary hover:cursor-pointer flex items-center gap-1"
            >
              Confira o projeto <ArrowRight size={24} />
            </a>
          ) : (
            ""
          )}
        </div>
      </motion.div>
      <div className="flex items-center gap-3">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src={project.img}
            alt="Imagem de exemplo mostrando Sistema ERP"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-96 hidden xl:flex xl:flex-col xl:gap-6 px-8 font-bold text-lg text-gray">
            <p>{project.description}</p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                className="font-medium text-primary hover:text-secondary hover:cursor-pointer flex items-center gap-1"
              >
                Confira o projeto <ArrowRight size={24} />
              </a>
            ) : (
              ""
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
