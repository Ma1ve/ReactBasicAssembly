import { CountActionTypes } from '../reducers/countReducer';

export function inc(num: number) {
  return {
    type: CountActionTypes.INC_COUNT,
    payload: num,
  };
}
