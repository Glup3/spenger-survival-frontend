import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const RequestPage = () => {
  return (
    <main className="container">
      <div className="border rounded p-4 mb-5 shadow">
        <h1>Feedback</h1>
        <p>Du möchtest uns etwas mitteilen? Dann bist du hier genau richtig.</p>
        <FeedbackForm />
      </div>
    </main>
  );
};

export default RequestPage;
