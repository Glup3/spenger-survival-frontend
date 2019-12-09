import React from 'react';

import { Link } from 'react-router-dom';
import QuestionSection from '../components/QuestionSection';

const generalQuestions: QuestionAnswer[] = [
  {
    question: 'Was ist Spenger Survival?',
    answer: (
      <>
        Spenger Survival ist eine Plattform, wo man Tipps teilen kann. Diese Tipps sollen einem helfen, die Spengergasse
        zu überleben.
      </>
    ),
  },
  {
    question: 'Für wen ist Spenger Survival?',
    answer: (
      <>
        Allgemein ist diese Plattform für alle Spengergassler. Allerdings ist diese Plattform besonders an Erstklässler
        gerichtet, damit sie es gleich von Anfang an leichter in der Schule haben.
      </>
    ),
  },
  {
    question: 'Wer hat Spenger Survival ins Leben gerufen?',
    answer: (
      <>
        Phuc Tran ist der Gründer von Spenger Survival - siehe <Link to="/hall-of-fame">Hall of Fame</Link> für weitere
        Contributor.
      </>
    ),
  },
  {
    question: 'Ist die Schule offiziell am Projekt beteiligt?',
    answer: <>Nein, die Schule ist derzeit nicht am Projekt beteiligt.</>,
  },
  {
    question: 'Wie kann ich bei Spenger Survival mithelfen?',
    answer: (
      <>
        <p>Es gibt verschiedene Möglichkeiten, um Spenger Survival zu verbessern.</p>
        <ol>
          <li>
            Pull Request auf das{' '}
            <a href="https://github.com/Glup3/spenger-survival-frontend" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
          <li>
            Vorschläge an die Entwickler schicken (siehe <Link to="/hall-of-fame">Hall of Fame</Link>)
          </li>
          <li> Spenger Survival anderen Spengergasslern weiterempfehlen :&#41;</li>
        </ol>
      </>
    ),
  },
];

const tipsQuestions: QuestionAnswer[] = [
  {
    question: 'Von wem sind die Tipps?',
    answer: <>Von Spengergasslern natürlich.</>,
  },
  {
    question: 'Wie gebe ich einen Tipp ab?',
    answer: (
      <>
        In der Navbar auf &apos;Tipp abgeben&apos; oder <Link to="/tipp-abgeben">hier</Link> klicken und das Formular
        ausfüllen.
      </>
    ),
  },
  {
    question: 'Was kann ich alles bei einem Tipp angeben?',
    answer: (
      <>
        <p>Man kann folgende Dinge eingeben (Achte auf die Regeln):</p>
        <ul>
          <li>Name - echter Name, Künstlername, oder Anonym</li>
          <li>Geschlecht - männlich, weiblich, divers oder keine Angabe</li>
          <li>Klasse - die Klasse, in die du gehst</li>
          <li>Abteilung - die Abteilung, in die du gehst</li>
          <li>Titel - Überschrift von deinem Tipp</li>
          <li>Text - Kurze/Lange Beschreibung von deinem Tipp</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Brauche ich einen Account, um Tipps abzugeben?',
    answer: <>Nein, man braucht keinen Account. Man kann nämlich alles anonym angeben.</>,
  },
  {
    question: 'Wie ändere ich einen Tipp?',
    answer: <>Man kann keinen Tipp ändern. Einfach nochmal schreiben und den alten melden.</>,
  },
  {
    question: 'Wie melde ich einen Tipp?',
    answer: <>Das geht ganz einfach. Beim Tipp unten auf die Flagge klicken und dann im Popup einen Grund angeben.</>,
  },
  {
    question: 'Wie lösche ich einen Tipp?',
    answer: <>Nur Admins und Moderatoren können einen Tipp löschen. Tipps einfach für eine Löschbeantragung melden.</>,
  },
  {
    question: 'Wie wird ein Tipp verifiziert?',
    answer: (
      <>Ein Admin oder Moderator schaut sich den Tipp an und entscheidet dann ob er richtig beziehungsweise gut ist.</>
    ),
  },
  {
    question: 'Wieso gibt es die Klassen nicht als Liste zum Auswählen?',
    answer: (
      <>
        Es gibt einfach viel zu viele Klassen und es ist schwer diese schön anzuzeigen. Da ist es einfacher, wenn man
        die Klasse selber eingibt.
      </>
    ),
  },
  {
    question: 'Wieso kann ich eine Klasse und Abteilung getrennt bzw. verschieden angeben?',
    answer: (
      <>Es wäre zu viel Aufwand gewesen, diese Logik zu implementieren. Deswegen kann man beides getrennt angeben.</>
    ),
  },
];

const technologyQuestions: QuestionAnswer[] = [
  {
    question: 'Wo finde ich den Source Code?',
    answer: (
      <>
        Der Source Code ist Open Source und befindet in den folgenden Repos:
        <ul>
          <li>
            <a href="https://github.com/Glup3/spenger-survival-frontend" target="_blank" rel="noopener noreferrer">
              Frontend
            </a>
          </li>
          <li>
            <a href="https://github.com/Glup3/spenger-survival-backend" target="_blank" rel="noopener noreferrer">
              Backend
            </a>
          </li>
          <li>
            <a href="https://github.com/Glup3/spenger-survival-deployment" target="_blank" rel="noopener noreferrer">
              Deployment
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Welche Technologien wurden verwendet?',
    answer: (
      <>
        ReactJS, ExpressJS, REST, Bootstrap, MySQL und viele weitere. Siehe{' '}
        <a href="https://github.com/Glup3/spenger-survival-frontend" target="_blank" rel="noopener noreferrer">
          Github
        </a>{' '}
        für weitere Informationen.
      </>
    ),
  },
  {
    question: 'Womit ist das Frontend gemacht worden?',
    answer: <>Das Frontend ist in ReactJS Typescript geschrieben.</>,
  },
  {
    question: 'Womit ist das Backend gemacht worden?',
    answer: <>Das Backend ist in NodeJS Typescript geschrieben und es wird ein ExpressJS Server verwendet.</>,
  },
  {
    question: 'Welche Datenbank wurde verwendet?',
    answer: <>Es wurde MySQL verwendet und es lässt sich leicht mit einer anderen SQL Datenbank austauschen.</>,
  },
  {
    question: 'Wieso Typescript und nicht normales Javascript?',
    answer: <>Typisierung von Typescript ist so mächtig und das autocompleten macht viel mehr Spaß.</>,
  },
  {
    question: 'Wieso REST und kein GraphQL?',
    answer: (
      <>
        Das Entwickler Team hat sich dafür entschieden, mal wieder ein Projekt mit REST zu machen. GraphQL ist aber echt
        cool :3
      </>
    ),
  },
  {
    question: 'Wie wurde dieses Projekt deployed?',
    answer: <>Alle Services laufen auf einem Docker Server und über ein docker-compose File werden diese gestartet.</>,
  },
  {
    question: 'Wie lange wurde an diesem Projekt schon gearbeitet?',
    answer: <>Die Idee kam am 19.11.2019 und am 20.11.2019 wurde mit der Umsetzung angefangen.</>,
  },
];

const randomQuestions: QuestionAnswer[] = [
  {
    question: 'Wieso gibt es ein drittes Geschlecht zur Auswahl?',
    answer: <>Ich weiß nicht wieso, aber manche Leute haben sich das gewünscht xD</>,
  },
  {
    question: 'Wie kommt man in die Hall of Fame?',
    answer: <>Mitwirken! Contributen!</>,
  },
  {
    question: 'Wo bedanke ich mich am besten für diese tolle Website?',
    answer: <>Entweder persönlich an Phuc Tran (5CHIF) oder per E-Mail an tra17719@spengergasse.at</>,
  },
];

const FAQPage = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Informationen zu Spenger Survival</h1>
      <div className="w-auto">
        <QuestionSection title="Allgemein" questions={generalQuestions} group="general" />
        <QuestionSection title="Spenger Tipps" questions={tipsQuestions} group="tips" />
        <QuestionSection title="Technologie" questions={technologyQuestions} group="tech" />
        <QuestionSection title="Sonstige" questions={randomQuestions} group="random" />
      </div>
    </div>
  );
};

export default FAQPage;
