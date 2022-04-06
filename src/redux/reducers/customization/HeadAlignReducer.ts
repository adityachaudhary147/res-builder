import { act } from 'react-dom/test-utils';
import { Action, ActionType } from '../../actionTypes/index';

export interface HeadAlign{
    headalign:string,
    contentalign:string
}
// enum AlignType{
// left:'left',right:'right',center:'center'
// }
// enum ContentAlign{
//     horizontal:'horizontal',
//     vertical:'vertical'
// }
const initialState:HeadAlign = {
  headalign:'left',
  contentalign:'horizontal'
};


const HeadAlignReducer = (state: HeadAlign=initialState , action: Action):HeadAlign => {

    switch(action.type) {
        case ActionType.UPDATE_HEAD_ALIGN:
        return {...action.payload};
        default: 
            return state;
    }
}
export default HeadAlignReducer;
