import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActionCreators from '../actions';

function Counter() {
  const { value, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { increment, decrement, setStep } = bindActionCreators(
    CounterActionCreators,
    dispatch
  );
  return (
    <article>
      <h1>{value}</h1>
      <input
        type='number'
        value={step}
        onChange={({ target: { value } }) => setStep(+value)}
      />
      <br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </article>
  );
}
export default Counter;
