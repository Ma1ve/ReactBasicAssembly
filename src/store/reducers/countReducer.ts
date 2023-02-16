const initialState: CountState = {
  count: 0,
};

export interface CountState {
  count: number;
}

export enum CountActionTypes {
  INC_COUNT = 'INC_COUNT',
  DEC_COUNT = 'DEC_COUNT',
}

interface IncCountAction {
  type: CountActionTypes.INC_COUNT;
  payload: string;
}

interface DecCountAction {
  type: CountActionTypes.DEC_COUNT;
  payload: number;
}

export type CountAction = IncCountAction | DecCountAction;

export const countReducer = (state = initialState, action: CountAction) => {
  switch (action.type) {
    case CountActionTypes.INC_COUNT: {
      return { ...state, count: state.count + action.payload };
    }
    case CountActionTypes.DEC_COUNT: {
      return { ...state, count: state.count - action.payload };
    }

    default:
      return state;
  }
};
