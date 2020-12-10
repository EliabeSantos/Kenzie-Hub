import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import membersReducer from "./modules/members/membersReducer";
import userReducer from "./modules/user/userReducer";

const reducers = combineReducers({
  members: membersReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
