import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootRedecer from './root-reducer'
import { persistStore } from 'redux-persist'

const middleware = [logger];

export const store = createStore(rootRedecer, applyMiddleware(...middleware))

export const persistor = persistStore(store); 

export default { store, persistor }


