import { actiongetResumeFailure, actiongetResumeRequest, actiongetResumeSuccess, removeDegree, updateExp } from "../actionCreators"
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { resume, resumeState } from "../reducers/resumeReducer";
import axios from "axios";
import authHeader, { logout } from "./auth";
import { exp } from "../reducers/expReducer";

export const postExpAction = (state: exp, resid: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {

      //   dispatch(actiongetResumeRequest());
      console.log("hello");
      const token = authHeader();
      const token1: string = token['x-access-token'];
      console.log(token1);
      const config = { headers: { 'x-access-token': token1 } };

      // const params = [UniName, Course, StartYear, EndYear, Location, Resid];
      // const params = [Company, Jobtitle, Duration, Desc1, Desc2, Resid];

      const body = new URLSearchParams({ Company: state.company, Desc1: state.description, Jobtitle: state.job_title, Duration: state.duration, Desc2: state.description2, Resid: resid });

      const text = await axios.post("http://localhost:3004/api/addexperienced", body, config);


      if (text.status == 401) {
        logout()(dispatch);
      }
      if (text.status == 200) {
        dispatch(updateExp({ ...state, id: text.data }));
      }

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