import fetchRepositoriesActionTypes from "./FetchRepositories.types";

const INITIAL_STATE = {
  isFetching: false,
  reposInfo: null,
  links: [],
  error: null,
};

const FetchRepositoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case fetchRepositoriesActionTypes.FETCH_REPOS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case fetchRepositoriesActionTypes.FETCH_REPOS_SUCCESS:
      return {
        isFetching: false,
        reposInfo: action.payload.data,
        links: action.payload.links,
        error: null,
      };
    case fetchRepositoriesActionTypes.FETCH_REPOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default FetchRepositoriesReducer;
