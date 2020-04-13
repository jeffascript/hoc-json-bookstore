import { ADD_ITEM_TO_BORROWEDLIST, REMOVE_ITEM_FROM_BORROWEDLIST } from "../actions/actionTypes"

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BORROWEDLIST: {
      return {
        ...state,
        myBooks: state.myBooks.concat({...action.payload, quantity:action.payload.quantity !== 1 ? 1 : action.payload.quantity}),
      };
    }
    case REMOVE_ITEM_FROM_BORROWEDLIST: {
      const bookToRemove = state.myBooks.findIndex(
        (bookId) => bookId === action.payload
      );
      return {
        ...state,
        myBooks: [
          ...state.myBooks.slice(0, bookToRemove),
          ...state.myBooks.slice(bookToRemove + 1),
        ],
      };
    }

    default:
      return state;
  }
}
  