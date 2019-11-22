import React from 'react';

const TipAddForm = () => {
  const onSubmit = e => {
    e.preventDefault();
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
        <textarea className="form-control" id="beschreibung" rows={5}></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Tipp abgeben
      </button>
    </form>
  );
};

export default TipAddForm;
