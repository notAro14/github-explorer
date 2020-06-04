import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import RootReducer from "./root-reducer";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const myStore = createStore(
  RootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
