import React from 'react';

import AvatarContainer from '../AvatarContainer';

interface AvatarSectionPropsType {
  title: string;
  people: Person[];
}

const AvatarSection = ({ title, people }: AvatarSectionPropsType) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="row">
        {people.map((person, index) => (
          <div key={`dev-${index}`} className="col col-sm-12 col-md-6 col-lg-4 my-4">
            <AvatarContainer person={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSection;
