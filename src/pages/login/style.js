import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const TextFieldComponent = styled(TextField)`
  label {
    color: #43c1d8 !important;
  }
  ::after {
    border-bottom: #43c1d8 !important;
  }
`;

export const Form = styled.form`
  width: 60%;
  height: 40%;
  text-align: center;
  border: solid 0.5px #43c1d8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
`;

export const HDiv = styled.div`
  margin: 0 auto;
  width: 15rem;
  /* background-color: #43c1d8; */
  color: #43c1d8;
  border-radius: 1rem;
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0;
`;

export const ContainerContentForm = styled.div`
  text-align: center;
`;
