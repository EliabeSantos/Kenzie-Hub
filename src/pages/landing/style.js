import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding: 5rem 0 3rem 0;
  height: calc(100vh - 8rem);
  @media (min-width: 640px) {
    padding: 4rem 0 3rem 0;
    height: calc(100vh - 7rem);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  h1 {
    margin-bottom: 1rem;
  }
  @media (min-width: 640px) {
    img {
      margin: 4rem;
    }
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;

  button {
    margin-top: 2rem;
    width: 100%;
  }

  @media (min-width: 640px) {
    width: 40%;
    margin: 3rem;
    button {
      width: 80%;
    }
  }
`;
