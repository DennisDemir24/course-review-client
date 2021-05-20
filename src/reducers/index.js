import { combineReducers } from 'redux'
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import reviewReducer from './reviewReducer'

export default combineReducers({
  auth: authReducer,
  course: courseReducer,
  review: reviewReducer,
})
