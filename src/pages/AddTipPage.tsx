import React from 'react';
import TipAddForm from '../components/TipAddForm';

const AddTipPage = () => {
  return (
    <div className="container">
      <div className="border rounded p-4 mb-5 shadow">
        <h1 className="mb-3">Tipp abgeben</h1>
        <TipAddForm />
      </div>
    </div>
  );
};

export default AddTipPage;
