import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export const configureStore = preloadedState => {
  return createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )
}

const store = configureStore()
export default store
