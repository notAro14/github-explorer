import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {
  ButtonAppBar,
  Repositories,
  RapidSearch,
} from "../../components/index";
import { searchRepos } from "../../api";

const RepositoriesPage = ({ match }) => {
  const {
    params: { keywords },
  } = match;

  const [url, setUrl] = useState(
    `https://api.github.com/search/repositories?q=${keywords}&per_page=10`
  );

  const [reposInfo, setReposInfo] = useState(null);

  useEffect(() => {
    const fetchRepos = async (url) => {
      const { data } = await searchRepos(url);
      setTimeout(() => {
        setReposInfo(data);
      }, 500);
    };
    fetchRepos(url);
  }, [url]);

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <RapidSearch />
        <hr />
        <Repositories reposInfo={reposInfo} isLoading={!reposInfo} />
        <hr />
        <Button
          variant="text"
          color="secondary"
          onClick={() => {
            window.scrollTo(0, 0);
            setReposInfo(null);
            setUrl(
              "https://api.github.com/search/repositories?q=cats&per_page=10&page=2"
            );
          }}
        >
          next
        </Button>
      </Container>
    </div>
  );
};

export default RepositoriesPage;
