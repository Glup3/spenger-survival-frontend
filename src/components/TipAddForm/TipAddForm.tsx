import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import './TipAddForm.scss';

const TipAddForm = () => {
  const [description, setDescription] = useState('');
  const [limitExceeded, setLimitExceeded] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    console.log('cool form', description);
  };

  const onDescriptionChange = (content, _, __, editor) => {
    if (editor.getLength() > 1024) {
      setLimitExceeded(true);
      return;
    }

    setLimitExceeded(false);
    setDescription(content);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row mb-4">
        <div className="col">
          <div>
            <label htmlFor="name" className="float-left">
              Name
            </label>
            <div className="form-check form-check-inline float-right mr-0">
              <input className="form-check-input" type="checkbox" id="checkboxName" value="anonym" />
              <label className="form-check-label" htmlFor="checkboxName">
                Anonym
              </label>
            </div>
          </div>
          <input id="name" type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="col">
          <label htmlFor="geschlecht">Geschlecht</label>
          <select className="form-control" id="geschlecht">
            <option>Keine Angabe</option>
            <option>Männlich</option>
            <option>Weiblich</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div>
            <label htmlFor="klasse" className="float-left">
              Klasse
            </label>
            <div className="form-check form-check-inline float-right mr-0">
              <input className="form-check-input" type="checkbox" id="checkboxKlasse" value="anonym" />
              <label className="form-check-label" htmlFor="checkboxKlasse">
                Anonym
              </label>
            </div>
          </div>
          <input id="klasse" type="text" className="form-control" placeholder="Klasse" />
        </div>

        <div className="col">
          <label htmlFor="abteilung">Abteilung</label>
          <select className="form-control" id="abteilung">
            <option>Unbekannt</option>
            <option>Informatik</option>
            <option>Kunst und Design</option>
            <option>Biomedizin</option>
            <option>Gamedesign</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="titel">Titel</label>
        <input type="text" className="form-control" id="titel" placeholder="Titel" />
      </div>

      <div className="form-group">
        <label htmlFor="beschreibung">Beschreibung</label>
        <ReactQuill defaultValue={description} onChange={onDescriptionChange} />
        {limitExceeded ? <span className="float-right text-danger">Zu viele Zeichen!</span> : <></>}
      </div>

      <button type="submit" className="btn btn-primary">
        Tipp abgeben
      </button>
    </form>
  );
};

export default TipAddForm;
