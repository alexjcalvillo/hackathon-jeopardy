import { all } from 'redux-saga/effects';
import getCategory from './getCategory.saga';

export default function* rootSaga() {
  yield all([getCategory()]);
}
