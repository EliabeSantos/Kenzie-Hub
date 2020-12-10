import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import {
  ContainerHeaderForm,
  ButtonContainer,
  HDiv,
  TextFieldComponent,
  ContainerTextField
} from "./style";
import ContainerForm from "../../components/forms/ContainerForm";
import {AccessaccountImage} from "../../helpers/getImages"

const Login = () => {
  const history = useHistory();

  const schema = yup.object({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "Mínimo 3 caractéres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    console.log(data);
    // const request =  await userLoginThunk(data, setError)
    // history.push("/members");
    axios
      .post("https://kenziehub.me/sessions", data)
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.auth_token);
        history.push("/members");
      })
      .catch((err) =>
        setError("password", { message: "Senha ou usuário inválido" })
      );
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(handleForm)}>
          <ContainerHeaderForm>
          <HDiv>
            <h1>Login</h1>
          </HDiv>
          <AccessaccountImage width="16rem"/>
          </ContainerHeaderForm>

          <ContainerTextField>
            <TextFieldComponent
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              inputRef={register}
              error={!!errors.user}
              helperText={errors.user?.message}
            />
          </ContainerTextField>

          <ContainerTextField>
            <TextFieldComponent
              fullWidth
              margin="normal"
              label="Senha"
              name="password"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
              color="#43c1d8"
            />
          </ContainerTextField>

          <ButtonContainer>
            <DefaultButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              type="submit"
              value="Entrar"
            >
              Entrar
            </DefaultButton>
          </ButtonContainer>

          <ButtonContainer>
            <DefaultButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => history.push("/register/1")}
              value="Se cadastrar"
            >
              Se cadastrar
            </DefaultButton>
          </ButtonContainer>

      </form>
    </ContainerForm>
  );
};

export default Login;
