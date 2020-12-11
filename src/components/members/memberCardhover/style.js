import styled from "styled-components";
import Egirl from "./placeholders/e-girl.png";



export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 336px;
  height: 360px;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
  margin-bottom: 25px;
`;

export const Body = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({avatar}) => avatar ? avatar:Egirl });
  background-size: cover;
`;
export const ImageFilter = styled.div`
  width: 100%;
  height: 288px;
  background-color: rgba(21, 64, 72, 0.75);
  .Dev_Name {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25%;
    justify-content: center;
    width: 100%;
    font-size: 24px;
    font-weight: Thin 100;
    color: #e4f6f9;
    text-align: center;
  }
`;

export const Medias = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: flex-end;
  align-items: flex-end;

  width: 100%;
  height: 120%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(50px);
  transition: 1s ease-out;
  :hover {
    transform: translateY(-50px);
    opacity: 1;
  }
`;

export const Media = styled.div`
  width: 3.7rem;
  height: 3.7rem;

  background-color: whitesmoke;
  border-radius: 50%;
  box-shadow: 4px 6px 7px;
  z-index: 100;
  display: flex;
  align-items: center;

  transition: 0.2s ease-in-out;

  :hover {
    width: 4.2rem;
    height: 4.2rem;
  }
  .Media_Icon {
    margin: auto;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 5%;
  width: 90%;
  height: 20%;
  justify-content: space-evenly;
  font-size: 16px;

  .Spacer {
    position: relative;
    border-left: 1px solid gray;
    height: 40px;
    filter: opacity(0.5);
  }
  p {
    margin-top: 8px;
  }
  .Icon {
    filter: opacity(0.5);
  }

  div {
    position: relative;
    top: 0%;
  }
`;
