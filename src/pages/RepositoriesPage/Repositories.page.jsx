import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { ButtonAppBar } from "../../components/index";
import { searchRepos } from "../../api";
import { Repositories } from "../../components";

const RepositoriesPage = ({ match }) => {
  const {
    params: { keywords },
  } = match;
  const [reposInfo, setReposInfo] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await searchRepos(keywords);
      setTimeout(() => {
        setReposInfo(data);
      }, 1000);
    };
    fetchRepos();
  }, [keywords]);

  console.log({ keywords, reposInfo });

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <Repositories reposInfo={reposInfo} isLoading={!reposInfo} />
      </Container>
    </div>
  );
};

export default RepositoriesPage;
