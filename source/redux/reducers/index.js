import {SAVE_DATA} from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return action.payload;
    default:
      return state;
  }
};
