import { USERLOGIN, CREATENEWTECH, UPDATETECH } from "./actionTypes";
const userReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case USERLOGIN:
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
