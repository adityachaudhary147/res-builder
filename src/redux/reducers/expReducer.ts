import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../actionTypes/index';

export interface exp{
    id?:number,
   job_title:string,
   duration:string,
   description:string,
   description2:string,
   company:string,
}
export interface expState {
    exp:Array<exp>;
};
const initialState:expState= {
  exp:[],
};

const expReducer = (state: expState=initialState, action: Action):expState => {
    switch(action.type) {
        case ActionType.ADD_EXP:
                console.log(action);

                const len=state.exp.length;
                var present:Boolean=false;
                state.exp.map((val:exp)=>{ if(val.id==action.payload.id) present=true;});
                if(present)
                {
                    return {...state}
                }
                else{
                const added={...action.payload};
            return {
               exp:[...state.exp,added]
            }
        }
            case ActionType.REMOVE_DEGREE:
                return {
                    exp:state.exp.filter(val=>val.id==action.payload?false:true)
                }
        default:
            return state;
    }
}
export default expReducer;
