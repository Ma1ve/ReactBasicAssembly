import { combineReducers } from 'redux';

import { countReducer } from './countReducer';
import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  counter: countReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
