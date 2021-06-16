import React from 'react';

import './welcome.scss';

const Welcome = ({ user }) => {
  return (
    <div id="welcome__container">
      <span>Welcome, {user.name}.</span>
    </div>
  )
}

export { Welcome };
