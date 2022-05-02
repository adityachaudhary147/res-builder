import axios from "axios";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "../actionTypes/authActions";
  const API_URL = "http://localhost:3004/api/";
// for making api callss in the acitons  for making user login logout register...
class AuthService {
    login(email, password) {
      return axios.post(API_URL + "login", new URLSearchParams({Email: email,Password: password })).then((response) => {
        console.log(response);  
        if (response.data.Token) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        });
    }
    logout() {
      localStorage.removeItem("user");
      

    }
    register(Username, Email, Password) {
        const reqbody={
            Username:Username,Email:Email,Password:Password
        }
        // const req=JSON.stringify(reqbody);
      return axios.post(API_URL + "register", new URLSearchParams(reqbody)
    )}
    }

// for having the the information regarding the accessToken
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.Token) {
      // for Node.js Express back-end
      return { 'x-access-token': user.Token };
    } else {
      return {};
    }
}
const AuthS=new AuthService();
export const register = (username, email, password) => (dispatch) => {
return AuthS.register(username, email, password).then(
    (response) => {
        console.log(response);
    dispatch({
          type: REGISTER_SUCCESS,
        });
    dispatch({
          type: SET_MESSAGE,
          payload: response.data,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
  export const login =(username, password) => (dispatch) => {
    return AuthS.login(username, password).then(
      (data) => {
          console.log(data,"login auth response");
          dispatch({
              type:SET_MESSAGE,
              payload:"login Success"
          })
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
  export const logout = () => (dispatch) => {
    AuthS.logout();
    dispatch({
      type: LOGOUT,
    });

  };