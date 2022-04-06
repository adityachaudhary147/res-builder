import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import reducers, { RootState } from './reducers/index';

import { composeWithDevTools } from "redux-devtools-extension";

const persistedState:RootState=loadState();
const store = createStore(reducers, persistedState, composeWithDevTools());

store.subscribe(() => {
    saveState(store.getState());
});

export default store;