import { all, takeLatest } from "redux-saga/effects";
import * as types from "../actions/types";

import { registerUser, login } from "./action";

export default function* rootSaga() {
  yield all([
    takeLatest(types.REGISTER_USER_REQUEST, registerUser),
    takeLatest(types.LOGIN_REQUEST, login)
  ]);
}
