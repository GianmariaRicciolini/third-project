import { ADD_TO_FAVORITIES, DELETE_FROM_FAVORITIES } from "../actions";

const initialState = {
  content: [],
};

const favReducers = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITIES:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };

    case DELETE_FROM_FAVORITIES:
      return {
        ...state,
        content: state.content.filter((job) => job._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export default favReducers;
