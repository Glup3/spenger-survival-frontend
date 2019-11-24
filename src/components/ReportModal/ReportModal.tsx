import React, { useState } from 'react';
import { useAlert } from 'react-alert';

import { useData } from '../../context/dataContext';

const ReportModal = () => {
  const [message, setMessage] = useState('');

  const data = useData();
  const alert = useAlert();

  const onClick = () => {
    setMessage('');
    alert.show(`"${data.selectedTip.title}" wurde gemeldet.`);
    data.reportTip(data.selectedTip.id, data.selectedTip.title, message);
  };

  return (
    <div
      className="modal fade"
      id="reportModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      arida-labelledby="reportModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">&quot;{data.selectedTip && data.selectedTip.title}&quot; melden</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="textarea">Grund</label>
              <textarea
                className="form-control"
                id="textarea"
                value={message}
                rows={3}
                onChange={v => setMessage(v.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={onClick}>
              melden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
