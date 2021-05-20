import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loadState, saveState } from './utils/localStorage.js'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import Course from './components/Course/Course.js'

const initialState = {}

const middleware = [thunk]

const persistedState = loadState()


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
  persistedState
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store