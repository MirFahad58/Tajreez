import appReducer from '../reducers/index'
import {
    createStore,
    applyMiddleware,
} from 'redux';
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
export default store = createStore(
    appReducer,
    applyMiddleware(middleware),
);