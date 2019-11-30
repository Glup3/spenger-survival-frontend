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
      <option value="1">Verifiziert</option>
      <option value="0">Unverifiziert</option>
    </select>
  );
};

export default VerifiedOptions;
