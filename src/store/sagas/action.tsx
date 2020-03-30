import { put } from "redux-saga/effects";
import bcrypt from "bcryptjs";
import { registerUserSuccess, loginSuccess } from "../actions";

export function* registerUser(action: any) {
  const { name, email, password } = action.payload;
  var hash = bcrypt.hashSync(password, 8);
  yield put(
    registerUserSuccess({
      id: Math.random(),
      name,
      email,
      password: hash
    })
  );
}

export function* login(action: any) {
  yield put(loginSuccess(action.payloa));
}
