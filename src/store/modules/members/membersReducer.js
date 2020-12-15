import { GETUSERLIST, GETUSERSBYID, REGISTERUSER } from "./actionTypes";

const memberList = {
    list: [],
    searchedMember: {},
};

const membersReducer = (state = memberList, action) => {
    const { type } = action;
    switch (type) {
        case GETUSERLIST:
            return { list: [...state.list, ...action.list], searchedMember: state.searchedMember };

        case GETUSERSBYID:
            return { list: [...state.list], searchedMember: action.user };

        default:
            return state;
    }
};

export default membersReducer;