
import { createStore, combineReducers } from "redux";
import borrowedListReducer from "../reducers/borrowedList";
import userReducer from "../reducers/user";


const initialState = {
    borrowedList: {
      myBooks: []
    },
    user: {
      username: ""
    }
  }; 

  const combinedReducer = combineReducers({
    borrowedList: borrowedListReducer,
    user: userReducer
  });
  
  export default function configureStore() {
    return createStore(
      combinedReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  