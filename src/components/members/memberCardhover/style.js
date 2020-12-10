import styled from "styled-components";
import Egirl from './placeholders/e-girl.png'

export const Card = styled.div `
  width: 344px;
  height: 372px;
  margin:auto;
  background-color: whitesmoke;
  box-shadow: 2px 4px 7px rgba(21, 64, 72, 0.6);
  margin-bottom:25px;
`;

export const Body = styled.div `
width:100%;
height:288px;
display:block;
`;

export const ProfileImage = styled.div `
width:100%;
height:288px;
background-image: url(${Egirl});
background-size: cover;

`;
export const ImageFilter = styled.div `
width:100%;
height:288px;
background-color:rgba(21, 64, 72, 0.75);
.Dev_Name{
  display:flex;
  position:relative;
  top:25%;
  justify-content:center;
  width:100%;
  font-size:24px;
  font-weight: Thin 100;
  color:#E4F6F9;
}
`

export const Medias = styled.div `
display: flex;
width: 100%;
height: 372px;
margin-top: -340px;
justify-content: space-evenly;
opacity: 0;
transform: translateY(65px);
transition:transform 0.8s ease-out;
&:hover {
  transform: translateY(0px);
  opacity:1;}

`;

export const MediaGithub = styled.div `
width:3.7rem;
height:3.7rem;
margin-top: 250px;
background-color: whitesmoke;
border-radius:50%;
box-shadow:4px 6px 7px;
z-index:100;
display:flex;
align-items:center;
transition-delay: 1s;
.Media_Icon{
  margin:auto;

}
`;
export const MediaLinkedin = styled.div `
width:3.7rem;
height:3.7rem;
margin-top: 250px;
background-color: whitesmoke;
border-radius:50%;
box-shadow:4px 6px 7px;
z-index:100;
display:flex;
align-items:center;
transition-delay: 1s;
.Media_Icon{
  margin:auto;
}
`;
export const MediaIntragram = styled.div `
width:3.7rem;
height:3.7rem;
margin-top: 250px;
background-color: whitesmoke;
border-radius:50%;
box-shadow:4px 6px 7px;
z-index:100;
display:flex;
align-items:center;
transition-delay: 1s;
.Media_Icon{
  margin:auto;
}
`;
export const MediaYoutube = styled.div `
width:3.7rem;
height:3.7rem;
margin-top: 250px;
background-color: whitesmoke;
border-radius:50%;
box-shadow:4px 6px 7px;
z-index:100;
display:flex;
align-items:center;
transition-delay: 1s;
.Media_Icon{
  margin:auto;
}
`;

export const Footer = styled.div `
display: flex;
margin:auto;
margin-top:24px;
width:90%;
height:6rem;
justify-content:space-evenly;
font-size:16px;
.Spacer{
  position: relative;
  border-left:1px solid gray;
  height:40px;
  filter: opacity(0.5);
}
p{
  margin-top: 8px;
}
.Icon{
  filter: opacity(0.5);
}

div{
  position: relative;
  top:0%;
}

`;