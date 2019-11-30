import React from 'react';
import { useData } from '../../context/dataContext';

const VerifiedOptions = () => {
  const data = useData();

  return (
    <select
      className="form-control"
      id="verifiedOptions"
      value={data.verifiedOption}
      onChange={e => data.setVerifiedOption(e.target.value)}
    >
      <option value="">Alle</option>
      <option value="true">Verifiziert</option>
      <option value="false">Unverifiziert</option>
    </select>
  );
};

export default VerifiedOptions;
