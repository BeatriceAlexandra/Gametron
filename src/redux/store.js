import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/user";
import { cartReducer } from "./reducers/cart";
import  thunk from "redux-thunk";
import logger from 'redux-logger'


const rootReducer = combineReducers ({
    cart: cartReducer,
    user: userReducer
})

const middlewares= [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;