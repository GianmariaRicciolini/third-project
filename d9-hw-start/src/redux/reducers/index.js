const initialState = {
  favorities: {
    content: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITIES":
      return {
        ...state,

        favorities: {
          ...state.favorities,
          content: state.favorities.content.concat(action.payload),
        },
      };

    case "DELETE_FROM_FAVORITIES":
      return {
        ...state,
        favorities: {
          ...state.favorities,
          content: state.favorities.content.filter((job) => job._id !== action.payload._id),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
