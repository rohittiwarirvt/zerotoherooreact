import { takeLatest, call, all,  put } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signInSuccess, signInFailure} from './user.actions';

export function* getUserSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({id: user.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signinWithGoogle() {

  try {
    const user = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshotFromUserAuth(user);
  } catch(error) {
    yield put(signInFailure(error));
  }

}


export function* signinWithEmail({payload: {email, password}}) {
  try {
    const user = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshotFromUserAuth(user);
  } catch(error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signinWithGoogle)
}


export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signinWithEmail)
}

export  function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}