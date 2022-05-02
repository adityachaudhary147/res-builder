import { SET_MESSAGE, CLEAR_MESSAGE } from "../../actionTypes/authActions";
interface mesAction{
  type:"SET_MESSAGE"|"CLEAR_MESSAGE",
  payload:String
}
interface messageState{
  message:String
}
const initialState = {message:''};
export default function (state:messageState = initialState, action:mesAction) {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}