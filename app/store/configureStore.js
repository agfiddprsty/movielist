import { configureStore } from '@reduxjs/toolkit';
// import monitorReducersEnhancer from '../reducers/monitorReducers'
import monitorReducerEnhancer from '../reducers/monitorReducer';
import loggerMiddleware from '../reducers/logger'
import app from '../reducers';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: app,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(loggerMiddleware),
    preloadedState,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}