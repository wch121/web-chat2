import { applyMiddleware,createStore } from "redux";
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'//增强器，使数据可在redux看到

const store = createStore(reducer,composeWithDevTools(applyMiddleware()))
export default store;