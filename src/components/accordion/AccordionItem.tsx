import React, { useRef } from 'react';

import './index.css';

export interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem = ({
  faq,
  onToggle,
  active
}: {
  faq: AccordionItemProps;
  onToggle: () => void;
  active: boolean;
}) => {
  const { question, answer } = faq;
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <li className="accordion_item">
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? '👌' : '👇'} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={{ height: active ? contentEl.current?.scrollHeight : '0px' }}
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};
