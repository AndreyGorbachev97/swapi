import { SET_HISTORY } from "./selectors";

const initialState = {
  items: [],
}

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    default:
      return state;
  }
};

export const setHistory = (history) => ({ type: SET_HISTORY, payload: history });