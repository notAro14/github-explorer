import counterActionTypes from "./Counter.types";
export const increment = () => {
  return {
    type: counterActionTypes.INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: counterActionTypes.DECREMENT,
  };
};
