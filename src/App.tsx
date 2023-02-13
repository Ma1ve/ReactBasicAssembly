import './index.css';

import IMAGE from './react.png';
import LOGO from './logo.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  const num = 0;
  return (
    <div>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" height="300" />
      <img src={LOGO} alt="React logo" height="300" />
      <ClickCounter />
    </div>
  );
};
