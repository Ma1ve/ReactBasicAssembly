import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as countActionCreators from './countActionCreators';

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
  ...countActionCreators,
};
