import React from 'react';

const Welcome = ({ user }) => {
  return (
    <div id="welcome__container">
      <span>Welcome, {user.name}.</span>
    </div>
  )
}

export { Welcome };
