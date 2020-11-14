import React from 'react';
import jService from '../../api/jService';

import generateCategoryIdSet from '../../logic/logic';

function App() {
  const ids = generateCategoryIdSet();
  const catergoryIds = ids.map((id) => {
    return <p key={id}>{id}</p>;
  });

  return (
    <div className="App">
      <h1>Welcome to the Jeopardy Application</h1>
      {catergoryIds}
    </div>
  );
}

export default App;
