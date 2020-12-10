import { WelcomeImage } from "../../helpers/getImages";
import DefaultButton from "../../components/shared/buttons/defaultButton";
import {
  Container,
  ButtonsContainer,
  MainContainer,
  InnerContainer,
} from "./style";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <>
      <MainContainer>
        <Container>
          <h1>Bem-Vindo!</h1>
          <InnerContainer>
            <WelcomeImage width="25rem" smallWidth="20rem" />
            <ButtonsContainer>
              <DefaultButton
                value={"Entrar"}
                _onClick={() => history.push("/login")}
              ></DefaultButton>
              <DefaultButton
                value={"Se cadastrar"}
                _onClick={() => history.push("/register")}
              ></DefaultButton>
            </ButtonsContainer>
          </InnerContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default Landing;
