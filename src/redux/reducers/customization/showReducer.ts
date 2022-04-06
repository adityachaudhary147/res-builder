import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../../actionTypes/index';

export interface showState{
    selected:string
}
// enum AlignType{
// left:'left',right:'right',center:'center'
// }
// enum ContentAlign{
//     horizontal:'horizontal',
//     vertical:'vertical'
// }
const initialState:showState = {
  selected:'content'
};


const ShowReducer = (state: showState=initialState , action: Action):showState => {

    switch(action.type) {
        case ActionType.UPDATE_SHOW:
        return {selected:action.payload};
        default: 
            return state;
    }
}
export default ShowReducer;
