import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../actionTypes/index';

export interface degree{
    id?:number,
    schoolname:string ,
    location:string,
    course:string,
    start_year:string,
    end_year:string,
}
export interface eduState {
    education:Array<degree>;
};
const initialState:eduState = {
    education:[],
};

const educationReducer = (state: eduState=initialState , action: Action):eduState => {
    switch(action.type) {
        case ActionType.ADD_DEGREE:
                console.log(action,state);
                const len=state.education.length;
                const added={...action.payload};
            return {
                education:[...state.education,added]
            }
            case ActionType.REMOVE_DEGREE:
                return {
                    education:state.education.filter((val)=>val.id==action.payload?false:true)
                }
            case ActionType.MAKE_EDU_EMPTY:
                return {education:[]}
        default: 
            return state;
    }
}
export default educationReducer;
