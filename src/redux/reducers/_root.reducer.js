import { combineReducers } from 'redux';
import score from './score.reducer';
import round from './round.reducer';

const rootReducer = combineReducers({ score, round });

export default rootReducer;
