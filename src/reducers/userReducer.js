import { Types } from "../actions/types";

const initialState = {
  user: {},
  isLogged: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.payload) {
    case Types.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
