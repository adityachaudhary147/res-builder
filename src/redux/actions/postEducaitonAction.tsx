import { actiongetResumeFailure, actiongetResumeRequest, actiongetResumeSuccess, removeDegree, updateEdu } from "../actionCreators"
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { resume, resumeState } from "../reducers/resumeReducer";
import axios from "axios";
import authHeader, { logout } from "./auth";
import { degree } from "../reducers/educationReducer";
import { LoadResumeAction } from "./loadResumeAction";

export const postEducationAction = (state: degree, resid: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {

      //   dispatch(actiongetResumeRequest());
      console.log("hello");
      const token = authHeader();
      const token1: string = token['x-access-token'];
      console.log(token1);
      const config = { headers: { 'x-access-token': token1 } };

      // const params = [UniName, Course, StartYear, EndYear, Location, Resid];

      const body = new URLSearchParams({ UniName: state.schoolname, Course: state.course, StartYear: state.start_year, EndYear: state.end_year, Location: state.location, Resid: resid });

      const text = await axios.post("http://localhost:3004/api/addeducationd", body, config);

      if (text.status == 401) {
        logout()(dispatch);
      }
      if (text.status == 200) {
        //   LoadResumeAction(resid)(dispatch);
        const degreeobj: degree = { ...state, id: text.data };
        dispatch(updateEdu(degreeobj));
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