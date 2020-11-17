import score from './score.reducer';
import { combineReducers } from 'redux';
import column1 from './column1.reducer';

const rootReducer = combineReducers({ column1, score });

export default rootReducer;
