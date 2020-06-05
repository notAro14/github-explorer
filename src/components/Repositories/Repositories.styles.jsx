import styled from "styled-components";
import FadeIn from "react-fade-in";
import Paper from "@material-ui/core/Paper";

export const RepositoriesContainer = styled(FadeIn)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const RepositoryContainer = styled(Paper)`
  margin: 1rem 0;
  padding: 1rem;
`;
