import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>
    {children}
  </Provider>
}