// import { Dispatch } from "react"
import { Dispatch,Action } from "redux"

import axios from 'axios';
import authHeader from "./auth";
import { removeDegree } from "../actionCreators";
export const removeEduDegree=(id:string,resid:string)=>{

    return async (dispatch:Dispatch<Action>)=>{

        try{

        const token=authHeader();
        const token1:string=token['x-access-token'];
        console.log(token1);
        const config={headers:{'x-access-token':token1}};

        // const params = [UniName, Course, StartYear, EndYear, Location, Resid];
       
        const body=new URLSearchParams({Resid:resid,Id:id});
      
      const text = await axios.post("http://localhost:3004/api/removeEducationEntry",body,config);

      if(text.status==200)
      {

        console.log("Successfully deleted the Degree from backend");
          dispatch(removeDegree(Number(id)));
      }

      console.log("hello");
       
    }
    catch{
        console.log("there is some error in the ");
    }




    }
}