import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

import {
  ButtonAppBar,
  Repositories,
  RapidSearch,
} from "../../components/index";

import { fetchRepos } from "../../redux/FetchRepositories/FetchRepositories.actions";

import {
  selectIsfetching,
  selectError,
  selectLinks,
  selectReposInfo,
} from "../../redux/FetchRepositories/FetchRepositories.selectors";

const RepositoriesPage = ({
  match: {
    params: { keywords },
  },
  isFetching,
  fetchRepos,
  links,
  reposInfo,
}) => {
  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=${keywords}&per_page=10`;
    fetchRepos(url);
  }, [fetchRepos, keywords]);

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <RapidSearch />
        <hr />
        <Typography variant="h6" component="h6" color="secondary">
          Results for the keywords "{keywords}"
        </Typography>
        {reposInfo ? (
          <Typography variant="subtitle1" component="p">
            <CountUp start={0} end={reposInfo.total_count} separator="," />{" "}
            results
          </Typography>
        ) : null}
        {!isFetching && !reposInfo ? null : (
          <Repositories reposInfo={reposInfo} isLoading={isFetching} />
        )}

        {links.length ? (
          <div>
            {links.map((link, index) => {
              const { title, url } = link;
              return (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.scroll({
                      top: 100,
                      left: 0,
                      behavior: "smooth",
                    });
                    fetchRepos(url);
                  }}
                  key={index}
                  variant="outlined"
                  color="secondary"
                  style={{ margin: "0.5rem" }}
                >
                  {title}
                </Button>
              );
            })}
          </div>
        ) : null}
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  reposInfo: selectReposInfo,
  isFetching: selectIsfetching,
  error: selectError,
  links: selectLinks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRepos: (url) => dispatch(fetchRepos(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesPage);
