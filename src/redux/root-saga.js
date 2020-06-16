import { call, all } from 'redux-saga/effects';
import { fetchCollections } from './shop/shop.sagas';


export default function* rootSaga() {
  yield all([call(fetchCollections)])
}