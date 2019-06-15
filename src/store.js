import thunk from 'redux-thunk' // redux-thunk 支持 dispatch function，并且可以异步调用它
import reducer from './reducer';
import { createStore } from 'redux' // 引入redux createStore、中间件及compose 
export default createStore(reducer)