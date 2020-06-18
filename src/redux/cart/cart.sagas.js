import  { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserActionTypes} from '../user/user.types';
import { clearCart} from './cart.actions';




export function* clearingCart() {
  yield put(clearCart());
}

export function* isSignOutTriggered() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearingCart)
}

export function* cartSagas() {
    yield all([call(isSignOutTriggered)])
}