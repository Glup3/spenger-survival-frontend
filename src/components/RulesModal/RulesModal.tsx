import React from 'react';

const RulesModal = () => {
  return (
    <div
      className="modal fade"
      id="rulesModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      arida-labelledby="rulesModalLabel"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Regeln</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ol>
              <li>Keine Beleidigungen</li>
              <li>Keine Diskriminierung und Diffamierung</li>
              <li>Keine Verleumdungen sowie geschäfts- und rufschädigende Äußerungen</li>
              <li>Nicht prüfbare Unterstellungen und Verdächtigungen</li>
              <li>Werbung und kommerzielle Inhalte</li>
              <li>Kein ALL CAPS</li>
              <li>Keine Informationen Anderer ohne deren Einverständnis teilen</li>
              <li>Be nice :&#041;</li>
            </ol>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">
              Habs verstanden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
