import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const withLoading = (WrappedComponent) => {
  const Loading = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <LoadingContainer>
        <ReactLoading type="spinningBubbles" color="#FFAB0F" />
      </LoadingContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Loading;
};

export default withLoading;
