import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import DropdownSelect from 'react-dropdown-select';

import useInput from '../../hooks/input-hook';
import RequiredStar from '../RequiredStar';
import { useData } from '../../context/dataContext';

const feedbackOptions: DropdownSelectOption[] = [
  { label: 'Feedback geben', value: 'feedback' },
  { label: 'Feature hinzufügen / ändern / löschen / ...', value: 'feature' },
  { label: 'Kategorie hinzufügen / ändern / löschen / ...', value: 'category' },
  { label: 'Bug melden', value: 'bug' },
  { label: 'Sonstiges', value: null },
];

const FeedbackForm = () => {
  const data = useData();
  const alert = useAlert();

  const [feedbackType, setFeedbackType] = useState<DropdownSelectOption>(feedbackOptions[0]);
  const { value: messageValue, bind: messageBind, reset: messageReset } = useInput('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    data.sendFeedback(messageValue, feedbackType.value);
    alert.show('Feedback wurde gesendet. Danke!');
    messageReset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group row">
        <div className="col-sm-9 col-md-6">
          <label htmlFor="messageType">
            Art
            <RequiredStar />
          </label>
          <DropdownSelect
            id="messageType"
            searchable={false}
            closeOnScroll={true}
            options={feedbackOptions}
            values={[feedbackType]}
            onChange={(values: DropdownSelectOption[]) => setFeedbackType(values[0])}
          />
        </div>
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
