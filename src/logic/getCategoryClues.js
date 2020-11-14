const filterCluesWithValues = (clues, category) => {
  const validClues = clues.filter((clue) => {
    return clue.value;
  });

  return sortCluesByValue(validClues, category);
};

const sortCluesByValue = (clues, category) => {
  const sortedClues = {
    100: [],
    200: [],
    300: [],
    400: [],
    500: [],
    600: [],
  };

  for (let clue of clues) {
    switch (clue.value) {
      case 100:
        sortedClues[100].push(clue);
        break;
      case 200:
        sortedClues[200].push(clue);
        break;
      case 300:
        sortedClues[300].push(clue);
        break;
      case 400:
        sortedClues[400].push(clue);
        break;
      case 500:
        sortedClues[500].push(clue);
        break;
      case 600:
        sortedClues[600].push(clue);
        break;
      default:
        break;
    }
  }

  return selectCategoryClues(sortedClues, category);
};

const selectCategoryClues = (sortedClues, category) => {
  const clueColumn = [];

  for (let level of Object.entries(sortedClues)) {
    clueColumn.push(level[1][Math.floor(Math.random() * level[1].length)]);
  }

  return {
    category,
    clueColumn,
  };
};

export default filterCluesWithValues;
