const defaultRound = 1;

const score = (state = defaultRound, action) => {
    switch(action.type) {
        case 'END_ROUND':
            return state + 1;
        default:
            return state;
    }
}

export default score;