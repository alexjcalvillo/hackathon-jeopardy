import React, { useEffect } from 'react';
import jService from '../../api/jService';
import filterCluesWithValues from '../../logic/getCategoryClues';

import generateCategoryIdSet from '../../logic/logic';

function App() {
  useEffect(() => {
    getClues();
  }, []);

  const getClues = async () => {
    const { data } = await jService.get('/', {
      params: {
        id: ids[0],
      },
    });

    return console.log(filterCluesWithValues(data.clues, data.title));
  };

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
