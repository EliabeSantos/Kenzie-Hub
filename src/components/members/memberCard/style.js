import styled from "styled-components";
import BlankProfile from "./placeholders/blankProfilePic.png";

export const Body = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;

export const ProfileImage = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-image: url(${({ avatar }) => (avatar ? avatar : BlankProfile)});
  background-size: cover;
  margin: auto;
  margin-top: -64px;
  border: 1px solid rgba(21, 64, 72, 0.6);
  box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
`;

export const ImageFilter = styled.div`
  visibility: hidden;
  width: 0%;
  height: 0px;
  background-color: rgba(21, 64, 72, 0);

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

  visibility: hidden;
  width: 100%;
  height: 120%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(50px);
  transition: 1s ease-out;

  transform: translateY(-50px);
  opacity: 1;
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
  opacity: 0;
  transition: 0.8s cubic-bezier(0.05, 0.62, 0.86, 0.14);

  width: 4.2rem;
  height: 4.2rem;

  visibility: hidden;

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
  visibility: hidden;
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

export const UnhoveredText = styled.p`
  position: relative;

  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;

  font-size: 1.3rem;
  text-align: center;
  top: -1rem;

  p:nth-child(2) {
    color: #777575;
    font-size: 1.1rem;
    margin-top: -10px;
  }
`;

export const TechIcons = styled.div`
  width: 60%;
  height: 4rem;
  margin: auto;
  margin-bottom: -25px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div:nth-child(1) {
    visibility: visible;
  }

  div:nth-child(2) {
    visibility: visible;
  }

  div:nth-child(3) {
    visibility: visible;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 336px;
  transition: height 0.5s;
  height: 208px;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.6);
  margin-bottom: 25px;

  margin-top: 100px;

  cursor: pointer;

  &:hover {
    box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
    p {
      visibility: visible;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 336px;
    height: 288px;
    margin: auto;
    background-color: whitesmoke;
    box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
    margin-bottom: 25px;
    margin-top: 100px;

    ${UnhoveredText} {
      display: none;
    }

    ${Body} {
      transition-delay: 0.5s;
      width: 100%;
      height: 80%;
      position: relative;
    }

    ${ProfileImage} {
      transition-delay: 0.5s;
      transition: width 0.5s;
      transition: height 0.5s;

      width: 100%;
      height: 288px;
      background-image: url(${({ avatar }) =>
        avatar ? avatar : BlankProfile});
      background-size: cover;
      border-radius: 0px;
    }

    ${ImageFilter} {
      transition: width 0.5s ease-in-out;
      transition: height 0.5s ease-in-out;
      width: 100%;
      height: 288px;
      background-color: rgba(21, 64, 72, 0.75);
      visibility: visible;

      .Dev_Name {
        display: flex;
        flex-direction: column;
        position: relative;
        top: 20%;
        transition: top 1s cubic-bezier(0.05, 0.62, 0.86, 0.14);
        justify-content: center;
        width: 100%;
        font-size: 24px;
        font-weight: Thin 100;
        color: #e4f6f9;
        text-align: center;
        p {
          margin-top: -5px;
        }
      }
    }

    ${Medias} {
      transition-delay: 0.5s;

      display: flex;
      justify-content: space-evenly;
      align-content: flex-end;
      align-items: flex-end;
      width: 100%;
      height: 120%;
      position: absolute;
      top: 0;
      left: 0;
    }

    ${Media} {
      transition-delay: 0.5s;
      visibility: visible;
      transform: translateY(10px);
      transition: 1s ease-out;

      transform: translateY(-10px);

      width: 3.7rem;
      height: 3.7rem;

      background-color: whitesmoke;
      border-radius: 50%;
      box-shadow: 4px 6px 7px;
      z-index: 100;
      display: flex;
      align-items: center;

      transition: 0.3s ease-in-out;

      width: 4.2rem;
      height: 4.2rem;

      &:nth-child(1) {
        opacity: 1;
        transition: opacity 1.5s;
      }

      &:nth-child(2) {
        opacity: 1;
        transition: opacity 2s;
      }

      &:nth-child(3) {
        opacity: 1;
        transition: opacity 2.5s;
      }

      &:nth-child(4) {
        opacity: 1;
        transition: opacity 3s;
      }
      .Media_Icon {
        margin: auto;
      }
    }

    ${Footer} {
      transition-delay: 0.5s;
      display: flex;
      align-items: center;
      visibility: visible;
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
    }

    ${TechIcons} {
      div:nth-child(1) {
        -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
      }
      div:nth-child(2) {
        -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
      }
      div:nth-child(3) {
        -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
      }
      display: none;
    }
  }
`;
