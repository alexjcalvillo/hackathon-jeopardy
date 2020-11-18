const defaultRound = 1;

const score = (state = defaultRound, action) => {
    console.log(action);
    switch(action.type) {
        case 'END_ROUND':
            return state + 1;
        default:
            return defaultRound;
    }
}

export default score;