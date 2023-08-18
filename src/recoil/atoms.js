import { atom } from "recoil";

// LoadingState
export const loadingState = atom({
  key: "loadingState",
  default: false,
});
// LoginState
export const loginState = atom({
  key: "loginState",
  default: false,
});

export const userList = atom({
  key: "userList",
  default: {},
});
