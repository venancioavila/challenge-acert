import * as types from "../actions/types";

const INITIAL_STATE = {
  newUser: null,
  token: null,
  users: []
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
    case types.LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
