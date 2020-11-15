import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import filterCluesWithValues from '../../logic/getCategoryClues';

function* workerSaga(action) {
  try {
    const { data } = yield axios.get('http://jservice.io/api/category', {
      params: { id: action.payload },
    });

    const filteredClues = yield filterCluesWithValues(data.clues, data.title);

    yield put({ type: 'SET_COLUMN_1', payload: filteredClues });
  } catch (error) {
    console.log('Error message', error);
  }
}
function* getCategory() {
  yield takeLatest('GET_COLUMN_1', workerSaga);
}
export default getCategory;
