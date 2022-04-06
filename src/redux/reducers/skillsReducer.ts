import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../actionTypes/index';

export interface skillsState {
    skills:Array<string>
} 
const initialState:skillsState = {
   skills:["DSA"]
}

const skillsReducer = (state: skillsState = initialState, action: Action):skillsState => {
    switch(action.type) {
        case ActionType.ADD_SKILL:
            
                console.log(action);
            return {
                skills:[...state.skills,action.payload]
            }
            case ActionType.REMOVE_SKILL:
                return {
                    skills: state.skills.filter(val=>{
                        if(val==action.payload)return false;
                        else return true;
                    })
                }
        default: 
            return state;
    }
}
export default skillsReducer;
