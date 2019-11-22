import React from 'react';

import './QuestionAnswerCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface QuestionAnswerCardPropsType {
  question: string;
  answer: string;
  keyTarget: string;
  group: string;
}

const QuestionAnswerCard = ({ question, answer, keyTarget, group }: QuestionAnswerCardPropsType) => {
  return (
    <div className="card">
      <h5
        className="card-header"
        data-toggle="collapse"
        data-target={`#${keyTarget}`}
        aria-expanded="false"
        aria-controls={keyTarget}
        id={`heading-${keyTarget}`}
      >
        {question}
        <FontAwesomeIcon className="float-right" icon={faChevronDown} />
      </h5>
      <div id={keyTarget} className="collapse" aria-labelledby={`heading-${keyTarget}`} data-parent={`#${group}`}>
        <div className="card-body" dangerouslySetInnerHTML={{ __html: answer }}></div>
      </div>
    </div>
  );
};

export default QuestionAnswerCard;
