import { combineReducers } from 'redux'
import navReducer from '../navigation/reducer'

export default combineReducers({
    nav : navReducer
});