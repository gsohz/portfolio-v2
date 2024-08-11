import { useState } from "react";
import { CaretRight } from "@phosphor-icons/react";
import { Service } from "../mocks/services";

const Card = ({ title, topics }: Service) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[460px] relative h-[26rem] border-gray/45 border-solid border-2 rounded-2xl shadow-md overflow-auto">
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
  );
};

export default Card;
