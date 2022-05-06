import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "../Reducer/Reducer";

const Store = createStore(Reducer, applyMiddleware(thunk));
console.log("store", Store.getState());
export default Store;
