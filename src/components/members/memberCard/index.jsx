import {
  DefaultCard,
  CardName,
  CardTech,
  CardContainer,
  TechContainer,
  ImageContainer,
  PersonContainer,
  PlaceholdeImg,
  TechImage,
} from "./style.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#43c1d8",
  },
  techimage: {
    display: "flex",
    alignItems: "center",
  },
  acordioncontainer: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const MemberCard = ({ MemberName, MemberModule, MemberTec1, MemberTec2 }) => {
  const classes = useStyles();
  return (
    <>
      <DefaultCard>
        <PersonContainer>
          <ImageContainer>
            <PlaceholdeImg />
          </ImageContainer>
          <CardContainer>
            <CardName>
              <p>{MemberName}</p>
            </CardName>
            <CardTech>
              <p>{MemberModule}</p>
            </CardTech>
          </CardContainer>
        </PersonContainer>
        <TechContainer>
          <Accordion className={classes.root}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Competencias</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.acordioncontainer}>
              <Typography className={classes.techimage}>
                <TechImage /> {MemberTec1}
              </Typography>
              <br />
              <Typography className={classes.techimage}>
                <TechImage /> {MemberTec2}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </TechContainer>
      </DefaultCard>
    </>
  );
};

export default MemberCard;
