import React from 'react';
import { connect } from 'react-redux';
import {
  createCounterIncrementAction,
  createCounterDecrementAction,
  createCounterSetStepAction,
} from '../actions';

function Counter(props) {
  const { value, increment, decrement } = props;
  return (
    <article>
      <h1>{value}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </article>
  );
}

const mapStateToProps = ({ counter }) => counter;

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(createCounterIncrementAction()),
  decrement: () => dispatch(createCounterDecrementAction()),
  setStep: (v) => dispatch(createCounterSetStepAction(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
