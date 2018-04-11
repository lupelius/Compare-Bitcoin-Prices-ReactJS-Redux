import coinmarketcap from './coinmarketcap';
import coindesk from './coindesk';
import map from './map';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    coinmarketcap,
    coindesk,
    map
});

export default rootReducer;
