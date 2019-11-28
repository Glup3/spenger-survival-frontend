import React from 'react';

import QuestionAnswer from '../types/question-answer';
import QuestionSection from '../components/QuestionSection';

const generalQuestions: QuestionAnswer[] = [
  {
    question: 'Was ist Spenger Survival?',
    answer: (
      <>
        Spenger Survival ist eine Plattform, wo man Tipps teilen kann. Diese Tipps sind für Spengergassler von
        Spengergasslern.
      </>
    ),
  },
  {
    question: 'Wer hat Spenger Survival ins Leben gerufen?',
    answer: <>Phuc Tran - siehe Hall of Fame für weitere Contributor.</>,
  },
  {
    question: 'Wie kann ich bei Spenger Survival mithelfen?',
    answer: (
      <>
        <p>Es gibt verschiedene Möglichkeiten, um Spenger Survival zu verbessern.</p>
        <p>
          1) Pull Request auf das{' '}
          <a href="https://github.com/Glup3/spenger-survival-frontend" target="blank">
            GitHub Repository
          </a>
        </p>
        <p>2) Vorschläge an die Entwickler schicken (siehe Hall of Fame)</p>
        <p>3) Spenger Survival anderen Spengergasslern weiterempfehlen :)</p>
      </>
    ),
  },
  {
    question: 'Welche Technologien wurden verwendet?',
    answer: (
      <>
        ReactJS, ExpressJS, REST, Bootstrap, MySQL und viele weitere. Siehe{' '}
        <a href="https://github.com/Glup3/spenger-survival-frontend" target="blank">
          Github
        </a>{' '}
        für mehr Informationen.
      </>
    ),
  },
];

const tipsQuestions: QuestionAnswer[] = [
  { question: 'Brauche ich einen Account, um Tipps abzugeben?', answer: <>Nein, man braucht keinen Account.</> },
  {
    question: 'Kann ich einen Tipp ändern?',
    answer: <>Nein, man kann keine Tipps ändern. Nur eine Löschung beantragen.</>,
  },
];

const FAQPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Informationen zu Spenger Survival</h1>
      <div className="w-auto">
        <QuestionSection title="Allgemein" questions={generalQuestions} group="general" />
        <QuestionSection title="Tipps" questions={tipsQuestions} group="tips" />
      </div>
    </div>
  );
};

export default FAQPage;
