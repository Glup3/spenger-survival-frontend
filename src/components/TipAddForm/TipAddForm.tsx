import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import ReCAPTCHA from 'react-google-recaptcha';
import { Redirect } from 'react-router-dom';
import DropdownSelect from 'react-dropdown-select';

import RulesModal from '../RulesModal';
import RequiredStar from '../RequiredStar';
import useInput from '../../hooks/input-hook';
import { useData } from '../../context/dataContext';
import { isEmptyOrSpaces } from '../../util/string-helper';
import { genderOptions, departmentOptions } from '../../constants';

import './TipAddForm.scss';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
    ['clean'],
  ],
};

const formats = ['bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link'];

const TipAddForm = () => {
  const data = useData();

  const { value: titleValue, bind: titleBind } = useInput('');
  const { value: nameValue, bind: nameBind } = useInput('');
  const { value: schoolClassValue, bind: schoolClassBind } = useInput('');

  const [gender, setGender] = useState<DropdownSelectOption>(genderOptions[0]);
  const [department, setDepartment] = useState<DropdownSelectOption>(departmentOptions[0]);
  const [category, setCategory] = useState<DropdownSelectOption>({ label: 'Keine', value: null });

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

    if (description.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
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

    const newTip: AddTipBody = {
      title: titleValue,
      schoolClass: schoolClassValue === '' ? null : schoolClassValue,
      author: nameValue === '' ? null : nameValue,
      gender: gender.value,
      department: department.value,
      captcha: captchaValue,
      description,
      category: category.value,
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
    <>
      <form onSubmit={onSubmit} noValidate>
        <div className="form-group row">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Anonym"
              value={nameValue}
              {...nameBind}
            />
          </div>

          <div className="col">
            <label htmlFor="geschlecht">Geschlecht</label>
            <DropdownSelect
              id="geschlecht"
              searchable={false}
              closeOnScroll={true}
              options={genderOptions}
              values={[gender]}
              onChange={(values: DropdownSelectOption[]) => setGender(values[0])}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col">
            <label htmlFor="klasse">Klasse</label>
            <input
              id="klasse"
              type="text"
              className="form-control"
              placeholder="Keine Angabe"
              value={schoolClassValue}
              {...schoolClassBind}
            />
          </div>

          <div className="col">
            <label htmlFor="abteilung">Abteilung</label>
            <DropdownSelect
              id="abteilung"
              searchable={false}
              closeOnScroll={true}
              options={departmentOptions}
              values={[department]}
              onChange={(values: DropdownSelectOption[]) => setDepartment(values[0])}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col">
            <label htmlFor="titel">
              Titel
              <RequiredStar />
            </label>
            <input
              type="text"
              className={`form-control ${titleError && 'border border-danger'}`}
              id="titel"
              placeholder="Titel"
              value={titleValue}
              {...titleBind}
            />
            {titleError && <span className="text-danger">Titel eingeben!</span>}
          </div>

          <div className="col">
            <label htmlFor="kategorie">Kategorie</label>
            <DropdownSelect
              id="kategorie"
              searchable={true}
              closeOnScroll={true}
              loading={data.isCategoriesLoading}
              disabled={data.isCategoriesLoading}
              options={[{ label: 'Keine', value: null }].concat(data.allCategories)}
              values={[category]}
              onChange={(values: DropdownSelectOption[]) => setCategory(values[0])}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="mb-2">
            <label htmlFor="beschreibung">
              Text
              <RequiredStar />
            </label>
            <button
              type="button"
              data-toggle="modal"
              data-target="#rulesModal"
              className="btn btn-info btn-sm float-right"
            >
              Regeln
            </button>
          </div>
          <ReactQuill
            modules={modules}
            formats={formats}
            defaultValue={description}
            onChange={onDescriptionChange}
            id="beschreibung"
            className={`${descriptionError && 'border border-danger'}`}
          />
          {descriptionError && <span className="text-danger">Text eingeben!</span>}
          {limitExceeded && <span className="float-right text-danger">Zu viele Zeichen!</span>}
        </div>

        <div className="form-group">
          <ReCAPTCHA sitekey="6LcTNMQUAAAAAGt-okF_vs0tfm3eouRqpN6SM3i7" onChange={value => setCaptchaValue(value)} />
          {captchaError && <span className="text-danger">ReCAPTCHA machen!</span>}
        </div>

        {!success && (
          <div className="form-group">
            <span className="text-danger"></span>
          </div>
        )}

        <div>
          <button type="submit" className="btn btn-primary">
            Tipp abgeben
          </button>
          <small className="float-right">
            <RequiredStar />
            Pflichtfelder
          </small>
        </div>
      </form>
      <RulesModal />
    </>
  );
};

export default TipAddForm;
