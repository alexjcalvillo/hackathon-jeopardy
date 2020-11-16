export const changeScore = ({ answerStatus, pointValue}) => ({
    type: answerStatus ? 'ADD_POINTS' : 'SUBTRACT_POINTS',
    points: pointValue
})