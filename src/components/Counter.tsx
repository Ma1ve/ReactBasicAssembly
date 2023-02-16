import { FC } from 'react';

import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector';
import { CountActionTypes } from '../store/reducers/countReducer';

import { useActions } from '../hooks/useActions';

const Counter: FC = () => {
  const { count } = useTypedSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  const { inc } = useActions();

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => dispatch({ type: CountActionTypes.INC_COUNT, payload: '4' })}>
        -
      </button>
      <div>{count}</div>
      <button onClick={() => inc(4)}>+</button>
    </div>
  );
};

export default Counter;
