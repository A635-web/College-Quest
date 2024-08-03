import { SET_USER, LOGOUT } from "../actionTypes/index";
import { signout } from "../../services/authService";

export const setUser = (user) => ({
    type: SET_USER,
    payload: {
        user,
    },
});

export const logout = async() => {
    setUser(null);
    const response = await signout();
    return response;
};