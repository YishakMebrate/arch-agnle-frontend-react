import { useState } from 'react';

/* Instruments */
import { counterSlice } from '@/redux/reducer/counter';
import { useSelector, useDispatch } from '@/redux/store';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="h1">Redux</h1>
        <div className="mx-auto flex justify-center">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            aria-label="Decrement value"
            onClick={() => dispatch(counterSlice.actions.decrement())}
          >
            -
          </button>
          <span className="text-dark font-bold text-4xl mx-3">{count}</span>
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            aria-label="Increment value"
            onClick={() => dispatch(counterSlice.actions.increment())}
          >
            +
          </button>
        </div>

        <div className="py-5 mx-auto flex justify-center">
          <input
            className="w-36 px-3 mr-3 bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus-visible:outline-0 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
          />
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => dispatch(counterSlice.actions.incrementByAmount(incrementAmount))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
};
