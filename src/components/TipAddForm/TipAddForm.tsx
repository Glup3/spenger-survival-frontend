import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import ReCAPTCHA from 'react-google-recaptcha';

import './TipAddForm.scss';
import useInput from '../../hooks/input-hook';

const TipAddForm = () => {
  const { value: nameValue, bind: nameBind } = useInput('');
  const { value: schoolClassValue, bind: schoolClassBind } = useInput('');
  const { value: titleValue, bind: titleBind } = useInput('');
  const { value: genderValue, bind: genderBind } = useInput('');
  const { value: departmentValue, bind: departmentBind } = useInput('');
  const [description, setDescription] = useState('');

  const [captchaValue, setCaptchaValue] = useState(null);
  const [limitExceeded, setLimitExceeded] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    const newTip = {
      title: titleValue,
      schoolClass: schoolClassValue === '' ? null : schoolClassValue,
      author: nameValue === '' ? null : nameValue,
      gender: genderValue === '' ? null : genderValue,
      department: departmentValue === '' ? null : departmentValue,
      captcha: captchaValue,
      description,
    };

    console.log('NEW TIP', newTip);
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
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Name leer lassen --> Anonym"
            value={nameValue}
            {...nameBind}
          />
        </div>

        <div className="col">
          <label htmlFor="geschlecht">Geschlecht</label>
          <select className="form-control" id="geschlecht" value={genderValue} {...genderBind}>
            <option value="">Keine Angabe</option>
            <option value="m">Männlich</option>
            <option value="w">Weiblich</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <label htmlFor="klasse">Klasse</label>
          <input
            id="klasse"
            type="text"
            className="form-control"
            placeholder="Klasse leer lassen --> Anonym"
            value={schoolClassValue}
            {...schoolClassBind}
          />
        </div>

        <div className="col">
          <label htmlFor="abteilung">Abteilung</label>
          <select className="form-control" id="abteilung" value={departmentValue} {...departmentBind}>
            <option value="">Unbekannt</option>
            <option value="Animation">Animation</option>
            <option value="Betriebsinformatik">Betriebsinformatik</option>
            <option value="Biomedizin">Biomedizin</option>
            <option value="Fachschule Informatik">Fachschule Informatik</option>
            <option value="Gamedesign">Gamedesign</option>
            <option value="Interior- und Surfacedesign">Interior- und Surfacedesign</option>
            <option value="Informatik">Informatik</option>
            <option value="Wirtschaft">Wirtschaft</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="titel">Titel</label>
        <input type="text" className="form-control" id="titel" placeholder="Titel" value={titleValue} {...titleBind} />
      </div>

      <div className="form-group">
        <label htmlFor="beschreibung">Text</label>
        <ReactQuill defaultValue={description} onChange={onDescriptionChange} id="beschreibung" />
        {limitExceeded ? <span className="float-right text-danger">Zu viele Zeichen!</span> : <></>}
      </div>

      <div className="form-group">
        <ReCAPTCHA sitekey="6LcTNMQUAAAAAGt-okF_vs0tfm3eouRqpN6SM3i7" onChange={value => setCaptchaValue(value)} />
      </div>

      <button type="submit" className="btn btn-primary">
        Tipp abgeben
      </button>
    </form>
  );
};

export default TipAddForm;
