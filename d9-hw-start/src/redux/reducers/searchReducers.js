import { SEARCH_RESULTS } from "../actions";

const initialState = {
  results: [],
};

const searchReducers = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducers;
