import { combineReducers } from 'redux';
import fontReducer from './customization/fontReducer';
import HeadAlignReducer from './customization/HeadAlignReducer';
import ShowReducer from './customization/showReducer';
import ThemeReducer from './customization/ThemeReducer';
import educationReducer from './educationReducer';
import expReducer from './expReducer';
// import educationReducer from './educationReducer';
import headReducer from './headReducer';
import skillsReducer from './skillsReducer';
const sections=combineReducers({exp:expReducer,skill:skillsReducer,education:educationReducer});
const customize=combineReducers({fontFamily:fontReducer,headAlign:HeadAlignReducer,theme:ThemeReducer,show:ShowReducer});
const reducers = combineReducers({
sections:sections,
personal:headReducer,
customize:customize
});


export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;