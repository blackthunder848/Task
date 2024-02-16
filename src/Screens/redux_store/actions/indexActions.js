import {SET_Answer} from './types';

export const setLoading = isTrue => dispatch => {
  dispatch({
    type: SET_Answer,
    payload: isTrue,
  });
};
