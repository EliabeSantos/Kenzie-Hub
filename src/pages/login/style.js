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

export const ContainerHeaderForm = styled.div`
  text-align: center;
  width: 24rem;
  margin-bottom: 2rem;
  /* background-color: aliceblue; */
`;
export const ContainerTextField = styled.div`
  margin-bottom: 2rem;
  width: 24rem;
  /* background-color: aquamarine; */
`;

export const Form = styled.form`
  text-align: center;
  /* background-color: beige; */
`;

export const HDiv = styled.div`
  margin: 0 auto;
  width: 15rem;
  /* background-color: #43c1d8; */
  color: #43c1d8;
  border-radius: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 24rem;
  margin-bottom: 1rem;
  text-align: center;
  /* background-color: black; */
`;
