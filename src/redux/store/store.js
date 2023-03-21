import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducerUser from "../reducers/reducerUser"

// import rootReducer from "./root-reducer"
const store = createStore(reducerUser, applyMiddleware(thunk))
export default store;