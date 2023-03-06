import { connectRouter } from "connected-react-router";

import login from "views/pages/UserAuthenticator/SignIn/reducer";
import signUp from "views/pages/UserAuthenticator/SignUpHost/reducer";
import createPassword from "views/pages/UserAuthenticator/CreatePassword/reducer";
import { commonReducer } from "redux/common";
import testReducer from "../testStore/testSlice";

const routes = (history) => ({
  router: connectRouter(history),
  common: commonReducer,
  login,
  signUp,
  createPassword,
  test: testReducer,
});
export default routes;
