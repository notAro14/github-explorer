import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

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
    `https://api.github.com/search/repositories?q=${keywords}&per_page=5`
  );

  const [reposInfo, setReposInfo] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchRepos = async (url) => {
      const { links, data } = await searchRepos(url);
      console.log(links);

      if (reposInfo) {
        setReposInfo(null);
      }
      window.scrollTo(0, 0);
      setLinks(links);
      setReposInfo(data);
    };
    fetchRepos(url);
  }, [url]);

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

        <Repositories reposInfo={reposInfo} isLoading={!reposInfo} />
        <hr />
        {links.length ? (
          <div>
            {links.map((link, index) => {
              const { title, url } = link;
              return (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setUrl(url);
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

export default RepositoriesPage;
