import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../actionTypes/index';

export interface resumeState {
    data:Array<any>|null,
    error:null|string,
    isloading:boolean

} 
const initialState:resumeState = {
   data:[],
   error:null,
   isloading:false,
}

const resumeReducer = (state: resumeState = initialState, action: Action):resumeState => {
    console.log(action);
    switch(action.type) {
        
        case ActionType.GET_RESUMES_REQUEST :
            return {
                isloading:true,
                error:null,
                data:null
                
            }
            case ActionType.GET_RESUMES_SUCCESS:
                console.log(action.payload);
                return {
                  isloading:false,
                  error:null,
                  data:action.payload
                }
            case ActionType.GET_RESUMES_FAILURE:
                    return {
                      isloading:false,
                      error:action.payload,
                      data:null
                    }
                     
        default: 
            return state;
    }
}
export default resumeReducer;
