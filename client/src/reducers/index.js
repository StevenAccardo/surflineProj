import { combineReducers } from 'redux';
import clientID from './idReducer';
import buoys from './buoyReducer';

const rootReducer = combineReducers({
  clientID,
  buoys
});

export default rootReducer;
