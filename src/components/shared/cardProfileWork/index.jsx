import { ContainerTech, CardIcons, CardTitulo, LinksContainer } from "./style";
import DefaultButton from "../buttons/defaultButton";
import Img from "../../../images/maleavatar.svg";
import { Link } from "react-router-dom";

const CartProfileWork = ({ userImg, title, description }) => {
  return (
    <>
      <ContainerTech>
        <CardIcons>
          {userImg ? <img src={userImg} /> : <img src={Img} />}
        </CardIcons>
        <CardTitulo>
          <h2> {title} </h2>
          <p>{description}</p>
        </CardTitulo>
        <LinksContainer>
          <a href="https://vercel.com">
            <DefaultButton value={"Vercel"} />
          </a>
        </LinksContainer>
      </ContainerTech>
    </>
  );
};

export default CartProfileWork;
