import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../../actionTypes/index';

export interface fonts{
   selected:string,
   fontFamily:string
}

const initialState:fonts = {
  selected:"serif",
  fontFamily:"Crimson Pro"
};


const fontReducer = (state: fonts=initialState , action: Action):fonts => {

    switch(action.type) {
        case ActionType.UPDATE_FONTS:
        return {...action.payload};
        default: 
            return state;
    }
}
export default fontReducer;
