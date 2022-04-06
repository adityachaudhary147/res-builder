import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../../actionTypes/index';

export interface ThemeState{
    selected:string
}
// enum AlignType{
// left:'left',right:'right',center:'center'
// }
// enum ContentAlign{
//     horizontal:'horizontal',
//     vertical:'vertical'
// }
const initialState:ThemeState = {
  selected:'1'
};


const ThemeReducer = (state: ThemeState=initialState , action: Action):ThemeState => {

    switch(action.type) {
        case ActionType.SELECT_THEME:
        return {...action.payload};
        default: 
            return state;
    }
}
export default ThemeReducer;
