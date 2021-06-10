import React, { useState } from 'react';

import { FormContainer } from './components/FormContainer';
import { FormProgress } from './components/FormProgress';

function App() {
  const [user, setUser] = useState()
    return (
    <div className="App">
      <div id="head">
        <FormProgress />
      </div>

      <div id="body">
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
