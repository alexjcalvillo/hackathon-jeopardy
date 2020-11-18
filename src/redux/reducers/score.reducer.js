const defaultScore = 0;

const score = (state = defaultScore, action) => {
  switch (action.type) {
    case 'SET_SCORE':
      return action.score;
    case 'ADD_POINTS':
      return state + action.PointValue;
    case 'SUBTRACT_POINTS':
      return state - action.PointValue;
    case 'CLEAR_SCORE':
      return defaultScore;
    default:
      return state;
  }
};

export default score;
