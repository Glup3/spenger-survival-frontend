import React from 'react';
import Person from '../types/person';

const developers: Person[] = [
  {
    name: 'Phuc Tran',
    title: 'Admin & Owner',
    email: 'glup3.tran@gmail.com',
  },
  {
    name: 'Glup3',
    title: 'Frontend & Backend',
    email: 'glup3.tran@gmail.com',
  },
];

const helpers: Person[] = [
  {
    name: 'Max G',
    title: 'Datenschutzexperte',
    instagram: 'instagram.com',
  },
  {
    name: 'Dave',
    title: 'UX Specialist',
    snapchat: 'snapchat.com',
  },
  {
    name: 'Lena',
    title: 'Marketing Queen',
    twitter: 'twitter.com',
  },
];

const HallOfFamePage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Hall of Fame</h1>

      <h2>Developers</h2>
      {developers.map((person, index) => (
        <p key={`dev-${index}`}>
          {person.title} {person.name}
        </p>
      ))}

      <h2>Helpers</h2>
      {helpers.map((person, index) => (
        <p key={`dev-${index}`}>{person.name}</p>
      ))}
    </div>
  );
};

export default HallOfFamePage;
