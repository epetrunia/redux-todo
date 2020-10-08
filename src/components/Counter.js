import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  const { value, step, increment, decrement, setStep } = props;
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
  increment: () =>
    dispatch({
      type: 'INCREMENT',
    }),
  decrement: () =>
    dispatch({
      type: 'DECREMENT',
    }),
  setStep: (v) =>
    dispatch({
      type: 'SET_STEP',
      step: v,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
