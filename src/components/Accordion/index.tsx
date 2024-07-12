import React, { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { AccordionProps } from "./types";

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  initOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initOpen);

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-wrapper">
      <div
        className="accordion-title flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-800 duration-500 ease-in-out transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`accordion-content overflow-hidden transition-height ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        {isOpen && children}
      </div>
    </div>
  );
};

export default Accordion;
