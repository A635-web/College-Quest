import { serverUnauth } from "../helpers/apiCall";
import axios from "axios";
axios.defaults.withCredentials = true;
const BASE_URL ="https://college-quest-1.onrender.com/api/v1";
export const sendOtp = async(phoneNumber) =>
    await new Promise((resolve, reject) => {
        serverUnauth
            .post("/send-otp", {
                phoneNumber: phoneNumber,
            })
            .then((response) => {
                resolve(response);
            })
            .catch(reject);
    });

export const signout = async() => {
    try {
        const res = await axios({
            method: "GET",
            url: `${BASE_URL}`,
        });
        return res;
    } catch (err) {
        console.log(err.response);
    }
};

export const signup = async(values) =>
    await new Promise((resolve, reject) => {
        serverUnauth
            .post("/user/signup", values)
            .then((response) => {
                resolve(response);
            })
            .catch(reject);
    });
export const forgotPassword = async(values) =>
    await new Promise((resolve, reject) => {
        serverUnauth
            .post("/forgot-password", values)
            .then((response) => {
                resolve(response);
            })
            .catch(reject);
    });

export const login = async(values) => {
    const { email, password } = values;
    try {
        const res = await axios({
            method: "POST",
            url: `${BASE_URL}/user/signin`,
            data: {
                email,
                password,
            },
            withCredentials: "true",
        });
        return res;
    } catch (err) {
        console.log(err.response);
    }
};
export const uploadFile = async(values) =>
    await new Promise((resolve, reject) => {
        serverUnauth
            .post("/upload/imageUpload", values)
            .then((response) => {
                resolve(response);
            })
            .catch(reject);
    });