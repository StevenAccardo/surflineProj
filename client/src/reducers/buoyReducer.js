import { BUOYS } from '../types/types';

export default (state = [], action) => {
  switch (action.type) {
    case BUOYS:
      return action.payload;
    default:
      return state;
  }
};
