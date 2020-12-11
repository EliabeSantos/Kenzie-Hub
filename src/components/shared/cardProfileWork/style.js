import styled from "styled-components";

export const ContainerTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  box-shadow: 0px 4px 2px #c5c5c5;
  background-color: #f5f5f5;
  margin-top: 5rem;
`;
export const CardIcons = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  border: 2px solid black;
  background-color: blue;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
export const CardTitulo = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    margin: 0.5rem 0 0 0;
  }
`;
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  button {
    border-radius: 0 !important;
    box-shadow: none !important;
    width: 50%;
    height: 4rem;
  }
`;
