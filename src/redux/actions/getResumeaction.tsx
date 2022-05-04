import { actiongetResumeFailure, actiongetResumeRequest, actiongetResumeSuccess } from "../actionCreators"
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { resume, resumeState } from "../reducers/resumeReducer";
import axios from "axios";
import authHeader, { logout } from "./auth";
import { error } from "console";

export const asyncThinkAction = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(actiongetResumeRequest());
      console.log("hello");
      const token = authHeader();
      const token1: string = token['x-access-token'];
      const config = { headers: { 'x-access-token': token1 } };


      const text = await axios.get("http://localhost:3004/api/getresume", config);
      if (text.status == 401) {
        logout()(dispatch);
      }

      console.log(text, "heer is th etext ");
      const data = text.data;
      var arrayRes: Array<any> = [];
      text.data.map((val: any) => arrayRes.push(val));
      console.log(arrayRes);
      dispatch(actiongetResumeSuccess(arrayRes));

      // console.log(text,data[0]);
      console.log(data);

    }
    catch (error) {
      console.log(error);
      dispatch(actiongetResumeFailure("helloerror"));
    }
  }
};