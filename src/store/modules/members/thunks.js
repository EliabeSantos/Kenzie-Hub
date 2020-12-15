import kenzieHub from "../../../services/axios";

import { getUserList, getUserById, registerUser } from "./actions";
import { userLoginThunk } from "../user/thunks";

export const getUserListThunk = (options) => async(dispatch) => {
    const { page, perPage } = options;
    let userList = [];

    try {
        const response = await kenzieHub.get(
            `/users?perPage=${perPage}&page=${page}`
        );
        userList = [...response.data];
        dispatch(getUserList(userList));
    } catch (err) {
        console.log(err);
    }
};

export const getUserByIdThunk = (userId) => async(dispatch) => {
    let fetchedUser = {};

    try {
        const response = await kenzieHub.get(`/users/${userId}`);
        fetchedUser = response.data;
        dispatch(getUserById(response.data));
    } catch (err) {
        console.log(err);
    }
};

export const registerUserThunk = (resisterUserInfo) => async(dispatch) => {
    const { email, password, name } = resisterUserInfo;

    try {
        console.log(resisterUserInfo);
        const response = await kenzieHub.post(`/users`, {
            email: email,
            password: password,
            name: name,
            bio: " ",
            contact: " ",
            course_module: " ",
        });

        const loginInfo = {
            email: email,
            password: password,
        };

        dispatch(userLoginThunk(loginInfo));
    } catch (err) {
        console.log(err);
    }
};