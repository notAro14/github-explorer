import { combineReducers } from "redux";

import CounterReducer from "./Counter/Counter.reducer";
import FetchRepositoriesReducer from "./FetchRepositories/FetchRepositories.reducers";

const RootReducer = combineReducers({
  counterReducer: CounterReducer,
  repositoriesReducer: FetchRepositoriesReducer,
});
export default RootReducer;
