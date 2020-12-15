import CardProfile from "../../components/shared/cardprofile";
import { ContainerProfile, Container } from "./style";
import CartProfileTech from "../../components/shared/cartprofiletech";
import Header from "../../components/shared/header";
import Footer from "../../components/shared/footer";
import { useParams } from 'react-router-dom'
import { getUserByIdThunk } from "../../store/modules/members/thunks";
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'

const VisitingProfile = () => {
  const dispatch = useDispatch()
  const {profileId} = useParams()
  
  useEffect(() => {
    dispatch(getUserByIdThunk(profileId))  
  },[])

  const { searchedMember } = useSelector(state => state.members)
  
  const test = () => {
   console.log(searchedMember) 
  }

  return (
    <>
      <Header />
      <Container>
        <CardProfile></CardProfile>
        <ContainerProfile>
        <button onClick={test}></button>
          <CartProfileTech> </CartProfileTech>
        </ContainerProfile>
        <Footer />
      </Container>
    </>
  );
};

export default VisitingProfile;
