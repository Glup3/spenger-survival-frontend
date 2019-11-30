import React from 'react';
import { useAlert } from 'react-alert';

import useInput from '../../hooks/input-hook';
import RequiredStar from '../RequiredStar';
import { useData } from '../../context/dataContext';

const FeedbackForm = () => {
  const data = useData();
  const alert = useAlert();

  const { value: messageValue, bind: messageBind, reset: messageReset } = useInput('');
  const { value: typeValue, bind: typeBind } = useInput('feedback');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    data.sendFeedback(messageValue, typeValue);
    alert.show('Feedback wurde gesendet. Danke!');
    messageReset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="messageType">
          Art
          <RequiredStar />
        </label>
        <select className="form-control" id="messageType" value={typeValue} {...typeBind} required>
          <option value="feedback">Feedback</option>
          <option value="feature">Neues Feature</option>
          <option value="bug">Bug</option>
          <option value="">Sonstiges</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">
          Nachricht
          <RequiredStar />
        </label>
        <textarea
          className="form-control"
          id="message"
          rows={5}
          value={messageValue}
          {...messageBind}
          required
        ></textarea>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Senden
        </button>
        <small className="float-right">
          <RequiredStar />
          Pflichtfelder
        </small>
      </div>
    </form>
  );
};

export default FeedbackForm;
