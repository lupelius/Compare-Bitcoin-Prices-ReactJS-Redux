import {compose,applyMiddleware,createStore} from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

export default(initialState) => {
    return createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
}
