import {
  Card,
  Body,
  ProfileImage,
  Medias,
  Footer,
  ImageFilter,
  Media,
} from "./style";

import {
  AiOutlineHeart,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaRegComment } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const MemberCardhover = ({ name, course, id, avatar }) => {
  const history = useHistory();



  const [medias, setMedias] = useState([
    Math.floor((Math.random() + 1) * 10),
    Math.floor((Math.random() + 1) * 10),
    Math.floor((Math.random() + 1) * 5),
    Math.floor((Math.random() + 1) * 5),
  ]);
  // if(course) {
  //   const course_module = course.split("(")[1].replace(")", "");
  // }

  function getCourseModule(course) {
    return course === "undefined"
      ? ""
      : course.includes("(")
      ? course.split("(")[1].replace(")", "")
      : course;
  }

  return (
    <>
      <Card>
        <Body>
          <ProfileImage avatar={avatar} >
            <ImageFilter>
              <div className="Dev_Name">
                <p>{name}</p>
                <p>{getCourseModule(course)}</p>
              </div>
            </ImageFilter>
          </ProfileImage>
          <Medias>
            <Media>
              <AiFillGithub className="Media_Icon" size="2.8rem" />
            </Media>

            <Media>
              <ImLinkedin className="Media_Icon" size="2.4rem" />
            </Media>

            <Media>
              <AiFillInstagram className="Media_Icon" size="2.8rem" />
            </Media>

            <Media>
              <AiFillYoutube className="Media_Icon" size="2.8rem" />
            </Media>
          </Medias>
        </Body>
        <Footer>
          <div className="Icon">
            <AiOutlineHeart size="32px" />
          </div>
          <p>{`${medias[0]}.${medias[1]}`} k</p>
          <div className="Spacer"></div>
          <div className="Icon">
            <FaRegComment size="32px" />
          </div>
          <p>{`${medias[2]}.${medias[3]}`} k</p>
          <div className="Spacer"></div>
          <div className="Icon">
            <TiArrowForwardOutline
              size="32px"
              onClick={() => {
                history.push(`/profile/${id}`);
              }}
            />
          </div>
          <p>Profile</p>
        </Footer>
      </Card>
    </>
  );
};

export default MemberCardhover;
