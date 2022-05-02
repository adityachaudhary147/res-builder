import { actiongetResumeFailure, actiongetResumeRequest, actiongetResumeSuccess } from "../actionCreators"
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
// import { resume, resumeState } from "../reducers/resumeReducer";
import axios from "axios";
import authHeader from "./auth";

export const asyncThinkActionPostResume = (name:string) => {
  return async () => {
    try {

    //   dispatch(actiongetResumeRequest());
        console.log("hello");
        const token=authHeader();
        const token1:string=token['x-access-token'];
        console.log(token1);
        const config={headers:{'x-access-token':token1}};
        const body=new URLSearchParams({Name:name});
      
      const text = await axios.post("http://localhost:3004/api/addresume",body,config);
       
        
        console.log(text,"heer is th etext ");
     const data=text.data;
     var arrayRes:Array<any>=[];
     text.data.map((val:any)=>arrayRes.push(val));
     console.log(arrayRes);
    //   dispatch(actiongetResumeSuccess(arrayRes));

      // console.log(text,data[0]);
      console.log(data);
      return "success";
    }
    catch(error){
        console.log(error);
        // dispatch(actiongetResumeFailure("helloerror"));
        return "error";
    }
  }
};