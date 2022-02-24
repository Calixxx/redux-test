import { productReducer, selectedProductReducer } from "./product.reducer";
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer
})

export default rootReducer;