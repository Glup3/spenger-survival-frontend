import React from 'react';

import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PaypalIcon,
  SnapchatIcon,
  TwitterIcon,
  YoutubeIcon,
  StackOverflowIcon,
  GithubIcon,
} from '../AvatarIcons';
import Person from '../../types/person';
import AvatarImage from '../AvatarImage';

interface AvatarContainerPropsType {
  person: Person;
}

const AvatarContainer = ({ person }: AvatarContainerPropsType) => {
  return (
    <div className="media">
      <AvatarImage image={person.image} name={person.name} />
      <div className="ml-3 media-body">
        <h5 className="my-0">{person.name}</h5>
        <small>{person.title}</small>
        <div>
          {person.email && <MailIcon email={person.email} />}
          {person.twitter && <TwitterIcon link={person.twitter} />}
          {person.instagram && <InstagramIcon link={person.instagram} />}
          {person.snapchat && <SnapchatIcon name={person.snapchat} />}
          {person.facebook && <FacebookIcon link={person.facebook} />}
          {person.discord && <DiscordIcon name={person.discord} />}
          {person.paypal && <PaypalIcon link={person.paypal} />}
          {person.youtube && <YoutubeIcon link={person.youtube} />}
          {person.github && <GithubIcon link={person.github} />}
          {person.linkedin && <LinkedinIcon link={person.linkedin} />}
          {person.stackOverflow && <StackOverflowIcon link={person.stackOverflow} />}
        </div>
      </div>
    </div>
  );
};

export default AvatarContainer;
