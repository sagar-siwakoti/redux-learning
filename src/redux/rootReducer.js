//combine all reducer
import {combineReducers} from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import exampleReducer from "./exampleFeature/exampleReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    example:exampleReducer
})
export default rootReducer;