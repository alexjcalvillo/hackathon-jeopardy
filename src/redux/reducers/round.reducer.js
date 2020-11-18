const defaultRound = 1;

const score = (state = defaultRound, action) => {
  switch (action.type) {
    case 'END_ROUND':
      return state + 1;
    case 'NEW_GAME':
      return defaultRound;
    default:
      return state;
  }
};

export default score;
