import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { commentReducers } from "./Reducer/commentReducer";


const reducer = combineReducers({
 comment:commentReducers
});

// if the value is in cart otherwise it will be blank and we can store cartitems in localstorage
let initialState = {

};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
