import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { increment, decrement } from "../../redux/Counter/Counter.actions";
import { selectCounter } from "../../redux/Counter/Counter.selectors";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <p>Value: {counter}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  counter: selectCounter,
});
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
