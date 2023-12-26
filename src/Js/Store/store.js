import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducers";


const store = createStore(rootReducer)
export default store