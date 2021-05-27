import { SET_PEOPLE, SET_IS_FETHING, SET_CURRENT_PAGE } from "./selectors";

const initialState = {
  items: [],
  isFetching: false,
  currentPage: 1,
  totalCount: 0,
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        items: action.payload.results,
        totalCount: action.payload.count,
        isFetching: false,
      }
    case SET_IS_FETHING:
      return {
        ...state,
        isFetching: action.payload,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    default:
      return state;
  }
};

export const setPeople = (people) => ({ type: SET_PEOPLE, payload: people });
export const setIsFetching = (bool) => ({ type: SET_IS_FETHING, payload: bool });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });