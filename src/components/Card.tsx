import { useEffect, useRef, useState } from "react";
import { CaretRight } from "@phosphor-icons/react";
import { Service } from "../mocks/services";
import { motion } from "framer-motion";
import { fadeIn } from "../frame-variants";

const Card = ({ title, topics }: Service) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [responsiveValueDelay, setResponsiveValueDelay] = useState<number>(0.3);

  const divRef = useRef(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (divRef.current) {
      const computedStyle = getComputedStyle(divRef.current);
      const animationDelay: number =
        +computedStyle.getPropertyValue("--animation-delay");

      setResponsiveValueDelay(animationDelay);
    }
  }, []);

  return (
    <motion.div
      ref={divRef}
      variants={fadeIn("up", responsiveValueDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[460px] relative h-[26rem] border-gray/45 border-solid border-2 rounded-2xl shadow-md overflow-auto [--animation-delay:0.3]  md:[--animation-delay:1.3]"
    >
      <div>
        <div className="m-6 ">
          <span className="text-xl md:text-2xl w-full text-center flex mb-4 font-semibold">
            {title}
          </span>
          {topics.map((topic, index) => (
            <div key={index}>
              <button
                className="w-full my-3 hover:text-primary flex "
                onClick={() => handleClick(index)}
              >
                <span
                  className={`text-lg flex items-center text-left md:mt-2 transition-colors duration-200 hover:text-primary  ${
                    activeIndex === index ? "text-primary" : "text-black"
                  }`}
                >
                  <CaretRight
                    size={18}
                    className={`mr-2 transform transition-transform duration-300  ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  {topic.title}
                </span>
              </button>

              <ul
                className={`list-disc w-full px-6 transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 max-h-[500px] translate-y-0"
                    : "opacity-0 max-h-0 translate-y-[-20px]"
                } overflow-hidden`}
              >
                {topic.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="text-sm lg:text-base transition-transform duration-300 transform translate-y-0 mb-2"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
