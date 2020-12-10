import styled from "styled-components";

export const HeaderDiv = styled.div`
  width: calc(100% - 2rem);

  padding: 0.5rem 1rem;

  position: fixed;
  top: 0px;
  background-color: whitesmoke;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  z-index: 99;
  box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);

  h1 {
    margin: 0;
  }
`;
