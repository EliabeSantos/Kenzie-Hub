import styled from "styled-components";

export const MainWorkContainer = styled.div`
  width: 30rem;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(50, 50, 50, 0.77);
`;

export const WorkTitle = styled.h2`
  color: black;
  font-weight: normal;
  padding: 10px 0 0 0;
`;

export const WorkDescription = styled.p`
  font-weight: normal;
  text-align: center;
`;

export const DeployLink = styled.a`
  text-decoration: none;
  width: 100%;
  button {
    width: 100%;
    height: 4rem;
    font-size: 20px;
    border-radius: 0 !important;
  }
`;
