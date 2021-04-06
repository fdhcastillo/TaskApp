import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const TaskApp = () => {
  return (
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
  )
}
