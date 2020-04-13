import { ADD_ITEM_TO_BORROWEDLIST, REMOVE_ITEM_FROM_BORROWEDLIST } from "./actionTypes"

export const addToCart = book => {
    return {
      type: ADD_ITEM_TO_BORROWEDLIST,
      book
    };
  };


  export const removeFromCart = book => {
    return {
      type: REMOVE_ITEM_FROM_BORROWEDLIST,
      book
    };
  };