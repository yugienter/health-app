import * as types from "./actionTypes";

const initialState = {
  isOnInitAuth: false,
  user: {},
};

/**
 * @description this reducer using in some global component
 *    like: Page, Menu ...
 */
export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ON_INIT_AUTH:
      return { ...state, isOnInitAuth: action.payload };

    case types.SET_USER:
      return { ...state, user: action.payload || {} };

    default:
      return state;
  }
};
