import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';

export function createReduxStore(initialState?: any) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: IS_DEV,
    preloadedState: initialState
  })
}