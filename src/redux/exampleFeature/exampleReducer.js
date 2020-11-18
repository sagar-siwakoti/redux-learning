import {BUY_EXAMPLE} from "./exampleTypes";

const initialState = {
    numOfExample: 10
}
const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_EXAMPLE:
            return {
                ...state,
                numOfExample: state.numOfExample - 1
            }
        default:
            return state
    }
}
export default exampleReducer;