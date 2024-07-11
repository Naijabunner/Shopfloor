import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyAmount, reset } from "./Counterslice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmout, setIncrementAmout] = useState();
  const addValue = Number(incrementAmout) || 0;
  const resetAll = () => {
    setIncrementAmout(0);
    dispatch(() => reset());
  };
  return (
    <>
      <p>{count}</p>
      <div className=''>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <input
          type='text'
          value={incrementAmout}
          onChange={(e) => setIncrementAmout(e.target.value)}
        />
        <button onClick={() => dispatch(incrementbyAmount(addValue))}>
          Decrease
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
