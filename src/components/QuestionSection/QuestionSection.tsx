import React from 'react';

import QuestionAccordion from '../QuestionAccordion';

interface QuestionSectionPropsType {
  questions: QuestionAnswer[];
  group: string;
  title: string;
}

const QuestionSection = ({ questions, group, title }: QuestionSectionPropsType) => {
  return (
    <div className="mb-5">
      <h2>{title}</h2>
      <QuestionAccordion questions={questions} group={group} />
    </div>
  );
};

export default QuestionSection;
