import CardHover from "../../components/members/memberCardhover";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserListThunk } from "../../store/modules/members/thunks";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);
  console.log(members);
  useEffect(() => {
    dispatch(getUserListThunk({ perPage: 15, page: 1 }));
  }, []);
  return (
    <>
      {members.map(({ name, id, course_module, avatar_url }, index) => (
        <CardHover
          key={index}
          name={name}
          id={id}
          course={course_module}
          avatar={avatar_url}
        ></CardHover>
      ))}
    </>
  );
};

export default Members;
