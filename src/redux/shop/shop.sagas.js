import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes  from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shop.actions';

export function* fetchCollectionsAsync() {

  try {
    const collectionRef = yield firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    console.log(collectionsMap);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch(error ) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollections() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollections)]);
}