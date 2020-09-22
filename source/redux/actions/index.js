import {SAVE_DATA} from '../types';

export const saveData = (payload) => ({
  type: SAVE_DATA,
  payload,
});
