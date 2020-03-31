import * as types from "../actions/types";

const data = localStorage.getItem("session");

var currentUser = null;

if (data) {
  currentUser = JSON.parse(data);
}

const INITIAL_STATE = {
  newUser: null,
  loggedUser: currentUser,
  users: []
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
    case types.LOGIN_SUCCESS:
      return { ...state, loggedUser: action.payload };
    default:
      return state;
  }
}
