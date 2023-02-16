import { useAppDispatch, useAppSelector } from './hooks/redux';
import './index.css';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

import React, { useEffect } from 'react';

export const App = () => {
  const { isLoading, error, count, users } = useAppSelector((state) => state.userReducer);

  const { increment } = userSlice.actions;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <h1>isLoading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  // console.log(isLoading);

  return (
    <div>
      {JSON.stringify(users, null, 2)}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
    </div>
  );
};
