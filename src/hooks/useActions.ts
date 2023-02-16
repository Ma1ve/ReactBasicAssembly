import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creators/';
import { useAppDispatch } from './useTypedSelector';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
