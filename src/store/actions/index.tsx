import * as types from "./types";

export const loginRequest = (data: any) => {
  return { type: types.LOGIN_REQUEST, payload: data };
};

export const loginSuccess = (data: any) => {
  return { type: types.LOGIN_SUCCESS, payload: data };
};

export const registerUserRequest = (data: any) => {
  return { type: types.REGISTER_USER_REQUEST, payload: data };
};

export const registerUserSuccess = (data: any) => {
  return { type: types.REGISTER_USER_SUCCESS, payload: data };
};
