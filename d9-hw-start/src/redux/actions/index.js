export const ADD_TO_FAVORITIES = "ADD_TO_FAVORITIES";
export const DELETE_FROM_FAVORITIES = "DELETE_FROM_FAVORITIES";
export const SEARCH_RESULTS = "SEARCH_RESULTS";

export const addToFavorites = (jobData) => {
  return {
    type: ADD_TO_FAVORITIES,
    payload: jobData,
  };
};

export const deleteFromFavorites = function (jobData) {
  return {
    type: DELETE_FROM_FAVORITIES,
    payload: jobData,
  };
};

export const updateSearchResults = (results) => {
  return {
    type: SEARCH_RESULTS,
    payload: results,
  };
};
