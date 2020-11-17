const defaultScore = 0;

const score = (state = defaultScore, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_SCORE':
            return state;
        case 'ADD_POINTS':
            return state + action.PointValue;
        case 'SUBTRACT_POINTS':
            return state - action.PointValue;
        default:
            return defaultScore;
    }
}

export default score;