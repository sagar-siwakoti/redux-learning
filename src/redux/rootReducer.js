//combine all reducer
import {combineReducers} from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import exampleReducer from "./exampleFeature/exampleReducer";
import userReducer from "./user/userReducer"

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    example:exampleReducer,
    user:userReducer
})
export default rootReducer;