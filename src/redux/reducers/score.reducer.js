const defaultScore = 0;

const score = (state = defaultScore, action) => {
    switch(action.type) {
        case 'SET_SCORE':
            return state;
        case 'ADD_POINTS':
            return state + action.points;
        case 'SUBTRACT_POINTS':
            return state - action.points;
        default:
            return defaultScore;
    }
}

export default score;