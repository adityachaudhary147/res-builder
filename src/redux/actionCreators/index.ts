

import { Action, updateObj } from "../actionTypes";

import { ActionType } from "../actionTypes";
import { HeadAlign } from "../reducers/customization/HeadAlignReducer";
import { degree } from "../reducers/educationReducer";
import { exp } from "../reducers/expReducer";
import axios from 'axios';
import authHeader from "../actions/auth";
import { resolve } from "path/posix";
import skillsReducer from "../reducers/skillsReducer";
import { getMaxListeners } from "process";
import { HeadState } from "../reducers/headReducer";
// import { resumeReducer } from "../reducers/resumeReducer";
// export function modifyHeaderName(newHeaderName:string):Action
// {
//     return {
//         type:ActionType.MODIFY_HEADER_NAME,payload:newHeaderName
//     }

// }
// export function modifyHeaderNumber(newHeaderNumber:number):Action
// {
//     return {
//         type:ActionType.MODIFY_HEADER_NUMBER,payload:newHeaderNumber
//     }

// }
//  export function modifyHeaderEmail(newHeaderEmail:string):Action
// {
//     return {
//         type:ActionType.MODIFY_HEADER_EMAIL,payload:newHeaderEmail
//     }

// }
// export function modifyHeaderStatement(newHeaderStatement:string):Action
// {
//     return {
//         type:ActionType.MODIFY_HEADER_NAME,payload:newHeaderStatement
//     }
// }


export function updateHeader(hello:HeadState):Action
{
    return { type:ActionType.UPDATE_HEADER,payload:hello}
}
export function updateEdu(hello:degree):Action
{
    return {type:ActionType.ADD_DEGREE,payload:hello}
}
export function removeDegree(hello:number):Action
{
    return {type:ActionType.REMOVE_DEGREE,payload:hello}
}
export function updateExp(hello:exp):Action{
    return {type:ActionType.ADD_EXP,payload:hello}
}
export function makeExpEmpty():Action{
    return {type:ActionType.MAKE_EXP_EMPTY}
}

export function makeEduEmpty():Action{
    return {type:ActionType.MAKE_EDU_EMPTY}
}

export function makeSkillEmpty():Action{
    return {type:ActionType.MAKE_SKILLS_EMPTY}
}
export function removeExp(hello:number):Action{
    return {type:ActionType.REMOVE_DEGREE,payload:hello}
}
export function addSkill(st:string):Action
{
// const resid='1';
// return addSkillRequest(st,resid);
return {type:ActionType.ADD_SKILL,payload:st};
}
//    return axios.post(API_URL + "addskill",new URLSearchParams(
//       {token:token["x-access-token"],Name:st,Resid:'1'} 
//    )).then(res=>{
//      console.log(res);
//      return {type:ActionType.ADD_SKILL,payload:st};
//  }).catch(function(error){
// console.log(error);
//  });

// }
export function removeSkill(st:string):Action{
    return {type:ActionType.REMOVE_SKILL,payload:st}
}


export function updateHeadAlign(er:string,re:string):Action{
    return {
        type:ActionType.UPDATE_HEAD_ALIGN,payload: {headalign:er,
        contentalign:re}
    }
}
export function selectTheme(st:string):Action{
    return {
        type:ActionType.SELECT_THEME,
        payload:{selected:st}
    }
}
export function actionUpdatefont(st:string,st2:string):Action{
    return {
        type:ActionType.UPDATE_FONTS,
        payload:{selected:st2,fontFamily:st}
    }
}
export function actionUpdateshow(st:string):Action{
    return{
        type:ActionType.UPDATE_SHOW,
        payload:st
    }
}

export function actiongetResumeRequest()
{

    return {
        type:ActionType.GET_RESUMES_REQUEST
    }
}
export function actiongetResumeSuccess(res:Array<any>)
{

    return {
        type:ActionType.GET_RESUMES_SUCCESS,
        payload:res
    }
}
export function actiongetResumeFailure(errMessege:string){
    return {
        type:ActionType.GET_RESUMES_FAILURE,
        payload:errMessege
    }
}