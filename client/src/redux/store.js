// import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
// import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import createRootReducer from "redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

export const history = createBrowserHistory();

// const defaultState = {};
// const enhancers = [];
// const middleware = [thunk, routerMiddleware(history)];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
//   if (typeof devToolsExtension === 'function')
//     enhancers.push(devToolsExtension());
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// );

// const store = createStore(
//   createRootReducer(history),
//   defaultState,
//   composedEnhancers
// );

// export default store;
// import rootReducer from "./reducers";

// // combineReducers will be handled internally by configureStore
// const rootReducer = (history: any) => ({
//   ...createRootReducer(history),
// });

const preloadedState = {};
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
  reducer: { ...createRootReducer(history) },

  preloadedState,
});

export default store;
