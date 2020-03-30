import { put } from "redux-saga/effects";

import { registerUserSuccess, loginSuccess } from "../actions";

export function* registerUser(action: any) {
  yield put(registerUserSuccess(action.payload));
}

export function* login(action: any) {
  yield put(loginSuccess(action.payloa));
}
