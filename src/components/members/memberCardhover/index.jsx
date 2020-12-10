import {
  Card,
  Body,
  ProfileImage,
  Medias,
  Footer,
  ImageFilter,
  MediaGithub,
  MediaLinkedin,
  MediaIntragram,
  MediaYoutube,
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

const MemberCardhover = () => {
  
  const history = useHistory();

  const [medias, setMedias] = useState([
    Math.floor((Math.random() + 1) * 10),
    Math.floor((Math.random() + 1) * 10),
  ]);

  const course = course_module.split("(")[1].replace(")","")


  return (
    <>
      <Card>
        <Body>
          <ProfileImage>
            <ImageFilter>
              <div className="Dev_Name">
                <p>{name}</p>
                <p>{course}</p>
              </div>
            </ImageFilter>
          </ProfileImage>
          <Medias>
            <MediaGithub>
              <AiFillGithub className="Media_Icon" size="2.8rem" />
            </MediaGithub>

            <MediaLinkedin>
              <ImLinkedin className="Media_Icon" size="2.4rem" />
            </MediaLinkedin>

            <MediaIntragram>
              <AiFillInstagram className="Media_Icon" size="2.8rem" />
            </MediaIntragram>

            <MediaYoutube>
              <AiFillYoutube className="Media_Icon" size="2.8rem" />
            </MediaYoutube>
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
          <p>{`${medias[0]}.${medias[1]}`} k</p>
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
