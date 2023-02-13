import './index.css';

import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
  return (
    <div>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" height="300" />
      <img src={LOGO} alt="React logo" height="300" />
    </div>
  );
};
