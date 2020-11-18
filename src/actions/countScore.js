export const changeScore = ({ answerStatus, PointValue}) => ({
    type: answerStatus ? 'ADD_POINTS' : 'SUBTRACT_POINTS',
    PointValue,
})

export const setScore = (score) => ({
    type: 'SET_SCORE',
    score,
})