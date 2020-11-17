const defaultRound = 1;

const round = (state = defaultRound, action) => {
  console.log(action);
  switch (action.type) {
    case 'ROUND_ONE':
      return state;
    case 'ROUND_TWO':
      return 2;
    case 'ROUND_THREE':
      return 3;
    default:
      return defaultRound;
  }
};

export default round;
