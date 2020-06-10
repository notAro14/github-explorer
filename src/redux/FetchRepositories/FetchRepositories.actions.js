import fetchRepositoriesActionTypes from "./FetchRepositories.types";
import { searchRepos } from "../../api";

const fetchReposStarted = () => ({
  type: fetchRepositoriesActionTypes.FETCH_REPOS_STARTED,
});

const fetchReposSuccess = ({ links, data }) => ({
  type: fetchRepositoriesActionTypes.FETCH_REPOS_SUCCESS,
  payload: { links, data },
});

const fetchReposFailure = (error) => ({
  type: fetchRepositoriesActionTypes.FETCH_REPOS_FAILURE,
  payload: error,
});

export const fetchRepos = (url) => {
  return (dispatch) => {
    dispatch(fetchReposStarted());

    searchRepos(url)
      .then(({ links, data }) => {
        dispatch(fetchReposSuccess({ links, data }));
      })
      .catch((err) => {
        dispatch(fetchReposFailure(err));
      });
  };
};
