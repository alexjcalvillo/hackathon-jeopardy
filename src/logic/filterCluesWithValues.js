// Filters out clues without value points

const filterCluesWithValues = (clues, category) => {
  const validClues = clues.filter((clue) => {
    return clue.value;
  });

  // return filterCluesUnder5Questions(validClues, category);
  return sortCluesByValue(validClues, category);
};

const filterCluesUnder5Questions = (clues, category) => {
  const enoughClues = clues.filter((clues) => {
    return clues.length > 10;
  });

  return sortCluesByValue(enoughClues, category);
};

const sortCluesByValue = (clues, category) => {
  const sortedClues = {
    100: [],
    200: [],
    300: [],
    400: [],
    500: [],
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
      default:
        break;
    }
  }

  return selectCategoryClues(sortedClues, category);
};

// Limits each category to one clue per point value
const selectCategoryClues = (sortedClues, category) => {
  const clueColumn = [];

  for (let level of Object.entries(sortedClues)) {
    if (level[1].length > 2) {
      clueColumn.push(level[1][0]);
    } else {
      clueColumn.push(level[1][Math.floor(Math.random() * level[1].length)]);
    }
  }

  return {
    category,
    clueColumn,
  };
};

export default filterCluesWithValues;