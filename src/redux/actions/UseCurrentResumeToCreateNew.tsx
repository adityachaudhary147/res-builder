import axios from "axios";
import { Action, Dispatch } from "redux";
import authHeader, { logout } from "./auth";

export const createNewFromCurrent=({resid,name}:{resid:string,name:string})=>{

    return async (dispatch:Dispatch<Action>)=>{

try{

        // load resume from the current selected one 
        console.log("call the laod resume api");
        console.log("hello");
        const token = authHeader();
        
        const token1: string = token['x-access-token'];
        const config = { headers: { 'x-access-token': token1 } };
        const body = { Resid: resid };
        const er = { headers: config.headers, params: body };

        const text = await axios.get("http://localhost:3004/api/loadresume", er);
        

        if (text.status == 200) {
            console.log("Resume Data Success FUlly loaded");
        }
        else if (text.status == 401) {
            console.log(text.data);
            logout()(dispatch);        
        }
        const data=text.data;
        console.log(data);


        // create new with the name provided

        
        const body2 = new URLSearchParams({ Name: name });
  
        const text2 = await axios.post("http://localhost:3004/api/addresume", body2, config);
  
  
        console.log(text2, "heer is th etext ");
        const data2 = text2.data;
        console.log(data2);



        console.log( "call the create ewusme and retrun id for the resume created ")
        console.log(name);
        console.log(data,data2);
        const body3 = new URLSearchParams({ Resid:data2,data:JSON.stringify(data)});
  
        const text3 = await axios.post("http://localhost:3004/api/createNewEntries", body3, config);

        console.log(text3);
  


        // using the resume return id i have to create new apis for education skills and others section
    //     data.edu.map(val=>{
    //         const body = new URLSearchParams({ UniName: val.schoolname, Course: state.course, StartYear: state.start_year, EndYear: state.end_year, Location: state.location, Resid: resid });

            
    //     })

    //   const text = await axios.post("http://localhost:3004/api/addeducationd", body, config);








        console.log( "push the personal table , edu tbale , exp etable , skill tbale with the data from load resume using new id of the crated resume ");
    }
    catch{
        console.log( ":error occured my bad ");
    }
        // post data using personal ,, skillls ,, exp ,, education for the new resume
    }
}