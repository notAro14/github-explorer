import counterActionTypes from "./Counter.types";

const INITIAL_STATE = {
  counter: 0,
};

const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case counterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
