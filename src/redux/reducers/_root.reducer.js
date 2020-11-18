import { combineReducers } from 'redux';
import column1 from './column1.reducer';
import score from './score.reducer';
import round from './round.reducer';

const rootReducer = combineReducers({ column1, score, round });

export default rootReducer;
