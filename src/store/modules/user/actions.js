import { USERLOGIN, CREATENEWTECH, UPDATETECH } from "./actionTypes";
const userLogin = (user) => {
  return { type: USERLOGIN, user };
};
const createNewTech = () => {
  return { type: CREATENEWTECH };
};
const updateTech = () => {
  return { type: UPDATETECH };
};
