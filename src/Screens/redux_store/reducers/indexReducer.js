import {SET_Answer} from '../actions/types';

const initialState = {
  anwser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_Answer:
      return {
        ...state,
        is_loading: action.payload,
      };

    default:
      return state;
  }
}
