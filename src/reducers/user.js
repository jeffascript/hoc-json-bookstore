
import { SET_USER_NAME } from "../actions/actionTypes"

export default function(state = {}, action) {
    switch (action.type) {
      case SET_USER_NAME:
        return {
          ...state,
          username: action.payload
        };
      default:
        return state;
    }
  }
   