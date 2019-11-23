import React from 'react';

import './AvatarImage.scss';

interface AvatarImagePropsType {
  image: string;
  name: string;
}

const AvatarImage = ({ image, name }: AvatarImagePropsType) => {
  return <img src={`${process.env.PUBLIC_URL}/assets/avatars/${image}`} alt={name} className="rounded-circle avatar" />;
};

export default AvatarImage;
