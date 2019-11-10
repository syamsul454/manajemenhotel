import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import auth from './reducers/user'
import room from './reducers/room'
import checkin from './reducers/checkin'
import customer from './reducers/customer'
import {logger} from 'redux-logger'

// this global states
const reducers = combineReducers({
auth,room, customer, checkin

})
const middleware = applyMiddleware(logger, thunk, promise)
const store = createStore( reducers, middleware)
export default store
