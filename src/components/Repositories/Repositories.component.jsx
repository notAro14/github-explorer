import React from "react";
import withLoading from "../withLoading/withLoading.component";
import { RepositoriesContainer } from "./Repositories.styles";
import FadeIn from "react-fade-in";

const Repositories = ({ reposInfo }) => {
  return (
    <RepositoriesContainer>
      <FadeIn>
        {reposInfo.items.map((repo) => {
          return <div key={repo.name}>{repo.name}</div>;
        })}
      </FadeIn>
    </RepositoriesContainer>
  );
};

export default withLoading(Repositories);
