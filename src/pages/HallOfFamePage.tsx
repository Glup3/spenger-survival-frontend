import React from 'react';

import { developers, moderators, helpers } from '../constants';
import AvatarSection from '../components/AvatarSection';

const HallOfFamePage = () => {
  return (
    <div className="container">
      <div className="border rounded p-4 mb-5 shadow">
        <h1 className="mb-4">Hall of Fame</h1>
        <AvatarSection title="Developers" people={developers} />
        <AvatarSection title="Moderators" people={moderators} />
        <AvatarSection title="Helpers" people={helpers} />
      </div>
    </div>
  );
};

export default HallOfFamePage;
