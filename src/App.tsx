import './index.css';

import IMAGE from './react.png';
import LOGO from './logo.svg';
import { ClickCounter } from './ClickCounter';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

export const App = () => {
  return (
    <div>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <Counter />
      <img src={IMAGE} alt="React logo" height="300" />
      <img src={LOGO} alt="React logo" height="300" />
      <ClickCounter />
      <div style={{ display: 'flex' }}>
        <UserList />
        <TodoList />
      </div>
    </div>
  );
};
