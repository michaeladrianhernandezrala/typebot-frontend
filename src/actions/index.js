import { Types } from "./types";

export const ActionCreators = {
  loginUser: (user) => ({ type: Types.LOGIN_USER, payload: user }),
};
