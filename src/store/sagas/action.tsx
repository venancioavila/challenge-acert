import { put } from "redux-saga/effects";
import bcrypt from "bcryptjs";
import { registerUserSuccess, loginSuccess, logoutSuccess } from "../actions";

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
  localStorage.setItem("session", JSON.stringify(action.payload));
  yield put(loginSuccess(action.payload));
}

export function* logout(action: any) {
  localStorage.clear();
  yield put(logoutSuccess(null));
}
