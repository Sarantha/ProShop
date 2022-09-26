import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
})

const innitialState = {}

const middleware = [thunk]

const store = createStore(reducer, innitialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store