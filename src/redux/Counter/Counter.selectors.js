import { createSelector } from "reselect";

const selectCounterReducer = (state) => state.counterReducer;

export const selectCounter = createSelector(
  [selectCounterReducer],
  (counterReducer) => counterReducer.counter
);
