import { actiongetResumeFailure, actiongetResumeRequest, actiongetResumeSuccess, removeDegree } from "../actionCreators"
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { resume, resumeState } from "../reducers/resumeReducer";
import axios from "axios";
import authHeader from "./auth";
import { exp } from "../reducers/expReducer";
import { HeadState } from "../reducers/headReducer";

export const postPersonalDetails = (state: HeadState, resid: string) => {
  return async () => {
    try {

      //   dispatch(actiongetResumeRequest());
      console.log("hello");
      const token = authHeader();
      const token1: string = token['x-access-token'];
      console.log(token1);
      const config = { headers: { 'x-access-token': token1 } };

      // const params = [UniName, Course, StartYear, EndYear, Location, Resid];
      // const params = [Company, Jobtitle, Duration, Desc1, Desc2, Resid];

      // const params = [Name, Profession, Email, Weburl, PhoneNo, Resid];
      console.log(state);
      const body = new URLSearchParams({ Name: state.name, Profession: state.statement, Email: state.email, Weburl: state.weburl, PhoneNo: String(state.mobile), Resid: resid });
      console.log(body);
      const text = await axios.post("http://localhost:3004/api/addpersonald", body, config);


      console.log(text, "heer is th etext ");
      const data = text.data;
      var arrayRes: Array<any> = [];
      //  text.data.map((val:any)=>arrayRes.push(val));
      console.log(arrayRes);
      //   dispatch(actiongetResumeSuccess(arrayRes));

      // console.log(text,data[0]);
      console.log(data);
      return "success";
    }
    catch (error) {
      console.log(error);
      // dispatch(actiongetResumeFailure("helloerror"));
      return "error";
    }
  }
};