const defaultRound = 1;

const round = (state = defaultRound, action) => {
  console.log(action);
  switch (action.type) {
    case 'ROUND_ONE':
      return state;
    case 'NEXT_ROUND':
      return state + 1;
    case 'ROUND_THREE':
      return 3;
    default:
      return state;
  }
};

export default round;
