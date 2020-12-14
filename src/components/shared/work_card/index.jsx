import {
  MainWorkContainer,
  WorkTitle,
  WorkDescription,
  DeployLink,
} from "./style";
import DefaultButton from "../buttons/defaultButton";

const WorkCard = ({ title, description, deploy_url }) => {
  return (
    <>
      <MainWorkContainer>
        <WorkTitle>{title}</WorkTitle>
        <WorkDescription>{description}</WorkDescription>

        <DeployLink href={deploy_url}>
          <DefaultButton value={"Demo"} />
        </DeployLink>
      </MainWorkContainer>
    </>
  );
};

export default WorkCard;
