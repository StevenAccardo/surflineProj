import { CLIENT_ID } from '../types/types';

export default (state = null, action) => {
  switch (action.type) {
    case CLIENT_ID:
      return action.payload;
    default:
      return state;
  }
};
