import score from './score.reducer';
import round from './round.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ score, round });

export default rootReducer;
