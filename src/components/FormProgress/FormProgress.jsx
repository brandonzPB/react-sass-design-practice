import React from 'react';

import './formProgress.scss';

const FormProgress = ({ authStep }) => {
  return (
    <div id="progress__container">
      <div id="progress-content">
        <span className="progress-text">
          Step {authStep} of 3
        </span>
        
        <ul>
          <li style={{ opacity: authStep === 1 ? 1 : 0.4 }}></li>
          <li style={{ opacity: authStep === 2 ? 1 : 0.4 }}></li>
          <li style={{ opacity: authStep === 3 ? 1 : 0.4 }}></li>
        </ul>
      </div>
    </div>
  )
}

export { FormProgress };
