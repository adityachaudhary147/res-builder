import { actionaddCurrentResumeName, actiongetResumeFailure, actiongetResumeRequest, actiongetResumeSuccess, makeEduEmpty, makeExpEmpty, updateEdu, updateExp, updateHeader } from "../actionCreators"
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import { resume, resumeState } from "../reducers/resumeReducer";
import axios from "axios";
import authHeader, { logout } from "./auth";
import { error } from "console";
import { exp, expState } from "../reducers/expReducer";
import { isConstructorDeclaration, updateExportDeclaration } from "typescript";
import { HeadState } from "../reducers/headReducer";
import { degree } from "../reducers/educationReducer";
import { text } from "stream/consumers";


// function updatePersonalD(data.personal);
// updateEducationD(data.edu);
// updateExperienceD(data.exp);
// updateSkillsD(data.skills);
interface upexp {
    Company: string, Jobtitle: string, Duration: string, Desc1: string, Desc2: string, Resid: string, Id: string
}
function updateExperienceD(exp: Array<upexp>, dispatch: Dispatch<Action>) {
    console.log(exp, "here is the exp section of delhi ");
    dispatch(makeExpEmpty());
    exp.map((val: upexp) => {
        const val2: exp = {
            job_title: val.Jobtitle,
            id: Number(val.Id),
            duration: val.Duration,
            description: val.Desc1,
            description2: val.Desc2,
            company: val.Company
        }
        dispatch(updateExp(val2));
    })
}
interface uppersonal {
    Name: string, Profession: string, Email: string, Weburl: string, PhoneNo: string, Resid: string
}


function updatePersonalD(personal: Array<uppersonal>, dispatch: Dispatch<Action>) {


    dispatch(updateHeader({
        email: "Your email",
        name: "Your name",
        mobile: Number("0"),
        statement: "your statement",
        profession: "your profession",
        weburl: "webuserl"
    }));
    personal.map((val: uppersonal) => {
        const val2: HeadState = {
            email: val.Email,
            name: val.Name,
            mobile: Number(val.PhoneNo),
            statement: val.Profession,
            profession: val.Profession,
            weburl: val.Weburl
        }

        dispatch(updateHeader(val2));
    })

}


interface uedu {

    UniName: string, Course: string, StartYear: string, EndYear: string, Location: string, Resid: string, Id: string
}
function updateEducationD(edu: Array<uedu>, dispatch: Dispatch<Action>) {
    console.log(edu, "here is the edu section data ");
    dispatch(makeEduEmpty());
    edu.map((val: uedu) => {
        const val2: degree = {
            course: val.Course,
            end_year: val.EndYear,
            schoolname: val.UniName,
            location: val.Location,
            start_year: val.StartYear,
            id: Number(val.Id)
        }
        dispatch(updateEdu(val2));
    })
}
function updateCurrentResumeName(name:string,dispatch:Dispatch<Action>)
{
    
    dispatch(actionaddCurrentResumeName(name));
}

export const LoadResumeAction = (resid: string) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            //   dispatch(actiongetResumeRequest());
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

            console.log(text, "heer is th etext ");
            const data = text.data;
            var arrayRes: Array<any> = [];
            //  const exp=text.exp;
            //  text.data.map((val:any)=>arrayRes.push(val));
            //  console.log(arrayRes);
            //   dispatch(actiongetResumeSuccess(arrayRes));
            // console.log(text,data[0]);
            console.log(data);



            // const params = [UniName, Course, StartYear, EndYear, Location, Resid];
            // const params = [Company, Jobtitle, Duration, Desc1, Desc2, Resid];

            // const params = [Name, Profession, Email, Weburl, PhoneNo, Resid];


            // data.exp(val=>{
            //     var experi:exp={ id:val.id,
            //         job_title:string,
            //         duration:string,
            //         description:string,
            //         description2:string,
            //         company:string,};

            updatePersonalD(data.personal, dispatch);
            updateEducationD(data.edu, dispatch);
            updateExperienceD(data.exp, dispatch);
            // updateSkillsD(data.skills);
            console.log(data);
            console.log("here is the name of the resume of the current selected ",data.resumeName.Name);
            updateCurrentResumeName(data.resumeName[0].Name,dispatch);

            //   dispatch(updateExp(data.exp));

        }

        catch (error) {
            // console.log(text.data);
            console.log("theere is some error in the api so we are triggering the logout function enjoy");
            logout()(dispatch);

            console.log(error);
            // dispatch(actiongetResumeFailure("helloerror"));
        }
    }
};