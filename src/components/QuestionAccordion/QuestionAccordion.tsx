import React from 'react';

import QuestionAnswerCard from '../QuestionAnswerCard/QuestionAnswerCard';

interface QuestionAccordionPropsType {
  questions: QuestionAnswer[];
  group: string;
}

const QuestionAccordion = ({ questions, group }: QuestionAccordionPropsType) => {
  return (
    <div className="accordion" id={group}>
      {questions.map((qa, index) => {
        const key = `${group}-${index}`;
        return <QuestionAnswerCard key={key} keyTarget={key} question={qa.question} answer={qa.answer} group={group} />;
      })}
    </div>
  );
};

export default QuestionAccordion;
