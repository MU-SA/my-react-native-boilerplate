import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ReduxPersistConfig from 'Config/ReduxPersist'
import RehydrationService from 'Services/Rehydration'
import { persistStore } from 'redux-persist'
export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()

  middleware.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersistConfig.active) {
    RehydrationService.updateReducers(store)
  }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga, store)

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}
