import React from "react";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

import withLoading from "../withLoading/withLoading.component";
import {
  RepositoriesContainer,
  RepositoryContainer,
} from "./Repositories.styles";

const Repositories = ({ reposInfo }) => {
  return (
    <RepositoriesContainer>
      {reposInfo.items.map((repo) => {
        return (
          <RepositoryContainer key={repo.full_name}>
            <Typography variant="h4" color="primary" component="h4">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                {repo.name}
              </Link>
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                href={repo.owner.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  style={{ marginRight: "0.5rem" }}
                  alt={repo.owner.name}
                  src={repo.owner.avatar_url}
                />
              </Link>
              <Typography
                variant="subtitle2"
                component="p"
                color="textSecondary"
              >
                {repo.owner.login}
              </Typography>
            </div>
            <Typography variant="body1" component="p" color="textPrimary">
              {repo.description}
            </Typography>
            <div>
              <Typography
                style={{ display: "flex", alignItems: "center" }}
                variant="subtitle2"
                color="secondary"
                component="p"
              >
                <span style={{ marginRight: "0.5rem" }}>
                  {repo.stargazers_count}
                </span>{" "}
                <StarIcon />
              </Typography>
              <Typography variant="body2" component="p">
                {`Forks: ${repo.forks_count} | Issues: ${repo.open_issues_count}`}
              </Typography>
            </div>
          </RepositoryContainer>
        );
      })}
    </RepositoriesContainer>
  );
};

export default withLoading(Repositories);
