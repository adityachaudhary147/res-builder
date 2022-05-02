import { fonts } from "../reducers/customization/fontReducer";
import { HeadAlign } from "../reducers/customization/HeadAlignReducer";
import { ThemeState } from "../reducers/customization/ThemeReducer";
import { degree } from "../reducers/educationReducer";
import { exp } from "../reducers/expReducer";
import { HeadState } from "../reducers/headReducer";

export enum ActionType {
    UPDATE_HEADER='UPDATE_HEADER',
    ADD_DEGREE="ADD_DEGREE",
    REMOVE_DEGREE='REMOVE_DEGREE',
    ADD_EXP="ADD_EXP",
    REMOVE_EXP="REMOVE_EXP",
    ADD_SKILL="ADD_SKILL",
    REMOVE_SKILL="REMOVE_SKILL",
    UPDATE_FONTS="UPDATE_FONTS",
    UPDATE_HEAD_ALIGN="UPDATE_HEAD_ALIGN",
    SELECT_THEME="SELECT_THEME",
    UPDATE_SHOW="UPDATE_SHOW",
    GET_RESUMES="GET_RESUMES",
    GET_RESUMES_REQUEST="GET_RESUMES_REQUEST",
    GET_RESUMES_SUCCESS="GET_RESUMES_SUCCESS",
    GET_RESUMES_FAILURE="GET_RESUMES_FAILURE",
    
}

// GET_ALL_THE_RESUME_OF_THE_USER

// GET_THE_RESUME_CLICKED

// GET_EDU_SECTION
// GET_EXP_SECTION
// GET_


interface  updateObj2{
    [key:string]:string|number,
}

export type updateObj=updateObj2
interface updateHeader{
    type:ActionType.UPDATE_HEADER,
    payload:HeadState
}
interface actionADDDegree{
    type:ActionType.ADD_DEGREE,

    payload:degree
}
interface actionRemoveDegree{
    type:ActionType.REMOVE_DEGREE,
    payload:number
}
interface actionADDExp{
    type:ActionType.ADD_EXP,
    payload:exp
}
interface actionRemoveExp{
    type:ActionType.REMOVE_EXP,
    payload:number
}
interface actionADDSkill{
    type:ActionType.ADD_SKILL,
    payload:string
}

interface actionREMOVESkill{
    type:ActionType.REMOVE_SKILL,
    payload:string
}
interface actionUpdateFont{
    type:ActionType.UPDATE_FONTS,
    payload:fonts
}
interface actionUpdateHeadAlign{
    type:ActionType.UPDATE_HEAD_ALIGN,
    payload:HeadAlign
}
interface actionselectTheme{
    type:ActionType.SELECT_THEME,
    payload:ThemeState
}
interface actionUpdateShow{
    type:ActionType.UPDATE_SHOW,
    payload:string
}

interface actionGETResumeRequest{
    type:ActionType.GET_RESUMES_REQUEST,
}
interface actionGETResumeSuccess{
    type:ActionType.GET_RESUMES_SUCCESS,
    payload:Array<any>
}
interface actionGETResumeError{
    type:ActionType.GET_RESUMES_FAILURE,
    payload:string
}
export type Action = updateHeader | actionADDDegree |actionADDExp | actionADDSkill | actionREMOVESkill |actionRemoveDegree | actionRemoveExp | actionUpdateFont |actionUpdateHeadAlign|actionselectTheme | actionUpdateShow
|actionGETResumeRequest| actionGETResumeSuccess | actionGETResumeError;