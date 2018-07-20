import { createStore } from 'redux';
import { CLIENT_ID } from './types/types';
import reducers from './reducers';

const store = createStore(reducers);
//When store is created, go see if user has a clientID, if so, dispatch action with clientID
if (window.localStorage.getItem('clientID')) {
  store.dispatch({ type: CLIENT_ID, payload: window.localStorage.getItem('clientID') });
}

export default store;
