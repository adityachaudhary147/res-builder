import axios from "axios";
import { Action, Dispatch } from "redux";
import authHeader from "./auth";
import { asyncThinkAction } from "./getResumeaction";

export const postDeleteResume=(resid:string)=>{

return async (dispatch:Dispatch<Action>)=>{


    try {

        //   dispatch(actiongetResumeRequest());
            console.log("hello");
            const token=authHeader();
            const token1:string=token['x-access-token'];
            console.log(token1);
            const config={headers:{'x-access-token':token1}};
            const body=new URLSearchParams({Resid:resid});
            
          const text = await axios.post("http://localhost:3004/api/removeall",body,config);
           
            
            console.log(text,"heer is th etext ");
            
        //   dispatch(actiongetResumeSuccess(arrayRes));
        if(text.status==200)
        {
            asyncThinkAction()(dispatch);
        }
            
    
          // console.log(text,data[0]);
          
          return "success";
        }
        catch(error){
            console.log(error);
            // dispatch(actiongetResumeFailure("helloerror"));
            return "error";
        }
}

   
}