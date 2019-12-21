import React from 'react';

import FeedbackForm from '../components/FeedbackForm';
import TodoList from '../components/TodoList';

const RequestPage = () => {
  return (
    <>
      <main className="container">
        <div className="border rounded p-4 mb-5 shadow">
          <h1>Feedback</h1>
          <p>Du möchtest uns etwas mitteilen? Dann bist du hier genau richtig.</p>
          <FeedbackForm />
        </div>
      </main>

      <main className="container">
        <div className="border rounded p-4 mb-5 shadow">
          <h1>Roadmap</h1>
          <p>
            Features, die noch implementiert werden. Bugs, die noch gefixt werden müssen. Hier sieht man, was noch alles
            gemacht werden muss.
          </p>
          <TodoList />
        </div>
      </main>
    </>
  );
};

export default RequestPage;
