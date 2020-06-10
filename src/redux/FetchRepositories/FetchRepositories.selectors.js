import { createSelector } from "reselect";

const selectRepositoriesReducer = (state) => state.repositoriesReducer;

export const selectReposInfo = createSelector(
  [selectRepositoriesReducer],
  (repositoriesReducer) => repositoriesReducer.reposInfo
);

export const selectIsfetching = createSelector(
  [selectRepositoriesReducer],
  (repositoriesReducer) => repositoriesReducer.isFetching
);

export const selectLinks = createSelector(
  [selectRepositoriesReducer],
  (repositoriesReducer) => repositoriesReducer.links
);

export const selectError = createSelector(
  [selectRepositoriesReducer],
  (repositoriesReducer) => repositoriesReducer.error
);
