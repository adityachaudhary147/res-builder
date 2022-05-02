import axios from 'axios';
import { ActionType } from '../actionTypes';
import authHeader from './auth';

const API_URL:string = "http://localhost:3004/api/";
class SkillService{
    addskill(token:string,st:string,resid:string){
        return axios.post(API_URL + "addskill",new URLSearchParams(
            {token:token,Name:st,Resid:resid} 
         )).then(res=>{
             Promise.resolve();
         }).catch(err=>{
             return Promise.reject();
         })
    }
    // getskills(token:string,resid:string){
    //     return axipos
    // }
}

const skills=new SkillService();
function addSkillRequest(st:string,resid:string){
    // const reqbody={ Name:st,Resid:1 }.toString();
    const token=authHeader();
    const token1=token['x-access-token'];
    return  skills.addskill(token1,st,resid).then(res=>{
return {type:ActionType.ADD_SKILL,payload:st};
    }).catch((err)=>{
        console.log(err);
        return {};
        
    })
}

export {};