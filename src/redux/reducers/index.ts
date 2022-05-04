import { combineReducers } from 'redux';
import fontReducer from './customization/fontReducer';
import HeadAlignReducer from './customization/HeadAlignReducer';
import ShowReducer from './customization/showReducer';
import ThemeReducer from './customization/ThemeReducer';
import educationReducer from './educationReducer';
import expReducer from './expReducer';
import Auth from './auth/auth';
import Message from './auth/message';
// import educationReducer from './educationReducer';
import headReducer from './headReducer';
import skillsReducer from './skillsReducer';
import resumeReducer from './resumeReducer';
import resumeNameReducer from './resumeNameReducer';
const sections=combineReducers({exp:expReducer,skill:skillsReducer,education:educationReducer});
const customize=combineReducers({fontFamily:fontReducer,headAlign:HeadAlignReducer,theme:ThemeReducer,show:ShowReducer});
const authReducer=combineReducers({auth:Auth,Message:Message});
const reducers = combineReducers({
sections:sections,
personal:headReducer,
customize:customize,
auth:authReducer,
resumelist:resumeReducer,
resName:resumeNameReducer
});


export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;