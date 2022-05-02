import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../actionTypes/index';

export interface HeadState {
    name: string,
    mobile: number,
    email: string,
    statement: string,
    profession:string,
    weburl:string,
} 
const initialState:HeadState = {
    email:"bob@gmail.com",
    name:"bobthebuilder",
    mobile:999999999,
    statement:"bob statement",
    weburl:"",
    profession:""
}

const headReducer = (state: HeadState = initialState, action: Action):HeadState => {
    switch(action.type) {
        case ActionType.UPDATE_HEADER:
            
                console.log(action);
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
}
export default headReducer;
