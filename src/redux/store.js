import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootRedecer from './root-reducer'

const middleware = [logger];

const store = createStore(rootRedecer, applyMiddleware(...middleware))

export default store;


