import { fadeIn } from "../frame-variants";
import { Project } from "../mocks/projects";
import { motion } from "framer-motion";

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
            {project.title.toUpperCase()}
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
        <p>{project.description}</p>
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
          <p className="max-w-96 hidden xl:block px-8 font-bold text-lg text-gray">
            {project.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
