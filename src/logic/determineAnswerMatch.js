export const determineAnswerMatch = (keywords, answer) => {
    const answerMatchArray = [];
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < keywords.length; j++) {
            if (answer[i] === keywords[j]) {
                console.log(answer[i]);
                console.log(keywords[j]);
                answerMatchArray.push(answer[i]);
            }
        }
    }
    return answerMatchArray.length - keywords.length === 0;
}

export const findKeywords = (answer) => {
    const keywords = answer.split(' ').filter(word => {
        switch(word) {
            case 'the':
            case 'and':
            case 'an':
            case 'a':
            case '&':
            case 'it':
            case 'is':
            case 'it\'s':
                return false;
            default:
                return true;
        }
    });
    return keywords;
}