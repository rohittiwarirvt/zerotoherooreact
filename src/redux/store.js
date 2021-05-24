import {createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import rootReducer  from './root-reducer';
import rootSaga from './root-saga';

//import thunk from 'redux-thunk';


const sagaMiddleware = createSagaMiddleWare();


//const middlewares = [logger, thunk];
const middlewares = [logger, sagaMiddleware];

if (process.env.NODE_ENF === 'development') {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore};