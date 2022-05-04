import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../actionTypes/index';

export interface resNameState {
   name:string

} 
const initialState:resNameState = {
   name:""
}

const resumeNameReducer = (state: resNameState = initialState, action: Action):resNameState => {
    console.log(action);
    switch(action.type) {
        
        case ActionType.ADD_RESUME_NAME:
            return {
               name:action.payload
                
            }        
        default: 
            return state;
    }
}
export default resumeNameReducer;
