import { combineReducers } from "redux";

import CounterReducer from "./Counter/Counter.reducer";

const RootReducer = combineReducers({
  counterReducer: CounterReducer,
});
export default RootReducer;
