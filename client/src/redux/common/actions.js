import { push } from "connected-react-router";
import { client, constants } from "helpers";
import * as types from "./actionTypes";

const { api, router } = constants;

// ----------------------------------------------------------------------------
// ---------------- service, private function ---------------------------------
/**
 * @function getUser
 * @description get user from server
 *    if fail => return empty
 *    else => convert user data and return
 */
const getUser = async (dispatch) => {
  dispatch({ type: types.SET_ON_INIT_AUTH, payload: true });
  const res = await client.request({ path: api.path.myInfo });
  dispatch({ type: types.SET_ON_INIT_AUTH, payload: false });

  if (res.status === 401) {
    // authorize failed should clear session then let user login again
    localStorage.clear();
    dispatch(push(router.selectRole));
  }

  if (res.status !== 200) return null;

  const { data: user } = res.data;

  return user;
};

// ----------------------------------------------------------------------------
// ---------------- service, private function ---------------------------------
/**
 * @function getUser
 * @description get user from server
 *    if fail => return empty
 *    else => convert user data and return
 */
const updateUserTcInfos = async (code, data, dispatch) => {
  const res = await client.request({
    method: "post",
    path: api.path.updateUserTcInfo(code),
    data,
  });
  console.log(res);

  if (res.status !== 201) return null;

  const { data: tcInfos } = res.data;

  return tcInfos;
};

// ----------------------------------------------------------------------------
// ---------------- actions ---------------------------------------------------
/**
 * @function initAuth
 * @description verify token or warm up user info to store (if not exist)
 *    Extend for future: validate permission client side
 */
export const initAuth = (isIgnore) => async (dispatch, getState) => {
  const state = getState();
  const { user } = state.common;
  let userInfo;

  // if user empty or pathname is ignore auth => get user
  if (!Object.keys(user).length) {
    userInfo = await getUser(dispatch);
    dispatch({ type: types.SET_USER, payload: userInfo });
  }

  if (isIgnore) {
    dispatch(push(router.home));
  }
  return userInfo || user;
};

export const reloadUserInfo = () => async (dispatch) => {
  const userInfo = await getUser(dispatch);
  dispatch({ type: types.SET_USER, payload: userInfo });
};

export const updateTcInfos = (data) => async (dispatch, getState) => {
  const state = getState();
  const { user } = state.common;
  const infos = await updateUserTcInfos(user.code, data, dispatch);
  dispatch({
    type: types.SET_USER,
    payload: {
      ...user,
      tcInfos: infos,
    },
  });
};

/**
 * @function logout
 * @description clear localStorage (JWT token)
 *    set user in store: common.user empty
 *    redirect to login page
 */
export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: types.SET_USER, payload: {} });
  dispatch(push(router.selectRole));
};
