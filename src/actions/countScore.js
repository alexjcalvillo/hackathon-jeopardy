export const changeScore = ({ answerStatus, PointValue }) => ({
  type: answerStatus ? 'ADD_POINTS' : 'SUBTRACT_POINTS',
  PointValue,
});
