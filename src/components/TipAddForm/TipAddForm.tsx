import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import ReCAPTCHA from 'react-google-recaptcha';
import { Redirect } from 'react-router-dom';

import useInput from '../../hooks/input-hook';
import { isEmptyOrSpaces } from '../../util/string-helper';
import { useData } from '../../context/dataContext';

import RequiredStar from '../RequiredStar';

import './TipAddForm.scss';

const modules = {
  toolbar: [
    [{ header: [2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
    ['clean'],
  ],
};

const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link'];

const TipAddForm = () => {
  const data = useData();

  const { value: titleValue, bind: titleBind } = useInput('');
  const { value: nameValue, bind: nameBind } = useInput('');
  const { value: schoolClassValue, bind: schoolClassBind } = useInput('');
  const { value: genderValue, bind: genderBind } = useInput('');
  const { value: departmentValue, bind: departmentBind } = useInput('');

  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [success, setSuccess] = useState<boolean>(null);

  const checkValidation = (): boolean => {
    let hasErrors = false;

    if (isEmptyOrSpaces(captchaValue)) {
      setCaptchaError(true);
      hasErrors = true;
    } else {
      setCaptchaError(false);
    }

    if (isEmptyOrSpaces(titleValue)) {
      setTitleError(true);
      hasErrors = true;
    } else {
      setTitleError(false);
    }

    if (isEmptyOrSpaces(description)) {
      setDescriptionError(true);
      hasErrors = true;
    } else {
      setDescriptionError(false);
    }

    if (limitExceeded) {
      hasErrors = true;
    }

    return hasErrors;
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (checkValidation()) {
      return;
    }

    const newTip = {
      title: titleValue,
      schoolClass: schoolClassValue === '' ? null : schoolClassValue,
      author: nameValue === '' ? null : nameValue,
      gender: genderValue === '' ? null : genderValue,
      department: departmentValue === '' ? null : departmentValue,
      captcha: captchaValue,
      description,
    };

    const result = await data.addTip(newTip);

    if (result === true) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const onDescriptionChange = (content, _, __, editor) => {
    if (editor.getLength() > 1024) {
      setLimitExceeded(true);
      return;
    }

    setLimitExceeded(false);
    setDescription(content);
  };

  if (success) {
    return <Redirect to="/tipp-bestaetigung" />;
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Leer --> Anonym"
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
            placeholder="Leer --> Keine Angabe"
            value={schoolClassValue}
            {...schoolClassBind}
          />
        </div>

        <div className="col">
          <label htmlFor="abteilung">Abteilung</label>
          <select className="form-control" id="abteilung" value={departmentValue} {...departmentBind}>
            <option value="">Keine Angabe</option>
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
        <label htmlFor="titel">
          Titel
          <RequiredStar />
        </label>
        <input
          type="text"
          className={`form-control ${titleError ? 'border border-danger' : ''}`}
          id="titel"
          placeholder="Titel"
          value={titleValue}
          {...titleBind}
        />
        {titleError ? <span className="text-danger">Titel eingeben!</span> : <></>}
      </div>

      <div className="form-group">
        <label htmlFor="beschreibung">
          Text
          <RequiredStar />
        </label>
        <ReactQuill
          modules={modules}
          formats={formats}
          defaultValue={description}
          onChange={onDescriptionChange}
          id="beschreibung"
          className={`${descriptionError ? 'border border-danger' : ''}`}
        />
        {descriptionError ? <span className="text-danger">Text eingeben!</span> : <></>}
        {limitExceeded ? <span className="float-right text-danger">Zu viele Zeichen!</span> : <></>}
      </div>

      <div className="form-group">
        <ReCAPTCHA sitekey="6LcTNMQUAAAAAGt-okF_vs0tfm3eouRqpN6SM3i7" onChange={value => setCaptchaValue(value)} />
        {captchaError ? <span className="text-danger">ReCAPTCHA machen!</span> : <></>}
      </div>

      {!success ? (
        <div className="form-group">
          <span className="text-danger"></span>
        </div>
      ) : (
        <></>
      )}

      <button type="submit" className="btn btn-primary">
        Tipp abgeben
      </button>
    </form>
  );
};

export default TipAddForm;
