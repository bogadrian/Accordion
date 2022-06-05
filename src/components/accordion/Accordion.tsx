import React, { useState } from 'react';
import { faqs } from './data';
import { AccordionItem } from './AccordionItem';

import './index.css';
/**
 * interface Accordion
 * @question string
 * @answer string
 */
export interface AccordionItemProps {
  question: string;
  answer: string;
}

export const Accordion = () => {
  const [clicked, setClicked] = useState<Record<string, boolean>>({});

  const handleToggle = (index: number) => {
    setClicked({
      clcicked: false,
      [index]: !clicked[index]
    });
  };
  const isActive = (index: number) => {
    return clicked[index] ?? false;
  };

  return (
    <div className="container">
      <h1 className="heading">What is Bit ?</h1>
      <div className="accordion">
        {faqs.map((faq: AccordionItemProps, index: number) => (
          <AccordionItem
            key={index}
            faq={faq}
            onToggle={() => handleToggle(index)}
            active={isActive(index)}
          />
        ))}
      </div>
    </div>
  );
};
