import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {
  ButtonAppBar,
  Repositories,
  RapidSearch,
} from "../../components/index";
import {
  selectIsfetching,
  selectError,
  selectLinks,
  selectReposInfo,
} from "../../redux/FetchRepositories/FetchRepositories.selectors";

import { fetchRepos } from "../../redux/FetchRepositories/FetchRepositories.actions";

const HomePage = ({ reposInfo, isFetching, links, fetchRepos }) => {
  const INIT_URL =
    "https://api.github.com/search/repositories?q=stars:>100000&per_page=10";

  useEffect(() => {
    fetchRepos(INIT_URL);
  }, [fetchRepos]);

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <RapidSearch />
        <Typography
          style={{ margin: "1rem", textAlign: "center" }}
          variant="h4"
          color="primary"
          component="h2"
        >
          Most popular repositories
        </Typography>

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
                  style={{ margin: "0.75rem" }}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
