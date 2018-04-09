import coinmarketcap from './coinmarketcap';
import coindesk from './coindesk';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    coinmarketcap,
    coindesk
});

export default rootReducer;
