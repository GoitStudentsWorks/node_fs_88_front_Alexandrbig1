import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;

  @media (min-width: 375px) {
    /* max-width: 37.5rem; */
  }

  @media (min-width: 768px) {
    /* max-width: 76.8rem; */
  }

  @media (min-width: 1440px) {
    /* max-width: 144rem; */
    display: flex;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  /* max-width: 144rem; */
  height: 100%;

  @media (min-width: 375px) {
    /* max-width: 37.5rem; */
  }

  @media (min-width: 768px) {
    /* max-width: 76.8rem; */
  }

  @media (min-width: 1440px) {
    /* max-width: 144rem; */
    /* min-height: 100vh; */
    /* height: 100%; */
    flex: 1;
    overflow: auto;
    min-height: 100vh;
  }
`;
