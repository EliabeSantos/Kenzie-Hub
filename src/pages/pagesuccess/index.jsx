import { CardImage,ContainerImage } from "./style";
import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import {
  AnnounceImage,
  ColabImage,
  FreelanceImage,
  OpenSourceImage,
  SoftwareDeveloperImage,
  WelcomeImage,
} from "../../helpers/getImages";

const PageSucess = () => {
  return (
    <>  
     <Header />
    <ContainerImage>
      <CardImage>
        <SoftwareDeveloperImage width="30rem"></SoftwareDeveloperImage>        
      </CardImage>

      <CardImage>
      <p>
          Se conecte com desenvolvedores, empresas, recrutadores e especialistas
          do tech business de todo o mundo
        </p>
        
      </CardImage>

      <CardImage>
        <AnnounceImage width="30rem"></AnnounceImage>
        
      </CardImage>

      <CardImage>
      <p>
          Monte seu time e tire sua ideia do papel, ou contribua para a maior
          comunidade open source
        </p>
      </CardImage>
      

      <CardImage>
        <ColabImage width="30rem"></ColabImage>
      </CardImage>

      <CardImage>
        <p>
          Anúncie seu trabalho, sua empresa ou seu produto, tudo em um só lugar!
        </p>
      </CardImage>

      <CardImage>
        <FreelanceImage width="30rem"></FreelanceImage>
      </CardImage>

      <CardImage>
        <p>
          Um freela impossível de entregar sozinho? Aqui não precisa fazer tudo
          sozinho, compartilhe o trabalho com quem está procurando ou ajude
          alguém!
        </p>
      </CardImage>

      <CardImage>
        <OpenSourceImage width="30rem"></OpenSourceImage>
      </CardImage>
      <CardImage>
        <p>
          Está buscando um dev verificado e com ótimos reviews para levar sua
          empresa para o proximo nível? Ou precisa daquela skill específica que
          não encontra em lugar nenhum? Contrate aqui!
        </p>
      </CardImage>

      <CardImage>
        <WelcomeImage width="30rem"></WelcomeImage>
      </CardImage>
      </ContainerImage>
      <Footer></Footer>
    </>
  );
};

export default PageSucess;
