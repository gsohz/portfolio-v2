import { useState } from "react";
import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { Service } from "../mocks/services";

const Card = ({ title, topics }: Service) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setHoveredIndex(null);
  };

  return (
    <div className="w-[460px] relative h-96 border-gray/45 border-solid border-2 rounded-2xl shadow-md overflow-auto">
      <div className="m-6 ">
        <span className="text-xl md:text-2xl w-full text-center flex mb-2 font-semibold">
          {title}
        </span>
        {topics.map((topic, index) => (
          <div key={index}>
            <button
              className="w-full my-3 hover:text-primary flex"
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                className={`text-lg flex items-center text-left md:mt-2 ${
                  activeIndex === index ? "text-primary" : "text-black"
                }`}
              >
                {hoveredIndex === index || activeIndex === index ? (
                  <CaretDown size={18} className="mr-2" />
                ) : (
                  <CaretRight size={18} className="mr-2" />
                )}
                {topic.title}
              </span>
            </button>

            {activeIndex === index && (
              <ul className="list-disc mx-6">
                {topic.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
