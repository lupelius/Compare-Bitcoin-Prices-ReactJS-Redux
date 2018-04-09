let defaultState={
    price_usd: 0,
    price_gbp: 0,
    price_eur: 0,
    loading: false,
    selectedCurrency: 'USD'
}

export default (state=defaultState,action)=>{
    switch(action.type) {
        case 'START_GETTING_BTC_CMC':
            return {...state, ...{ loading: true }};
        case 'FULLFILL_GET_BTC_CMC':
            return {...state, ...action.item, ...{ loading: false }};
        case 'CHANGE_CURRENCY_CMC':
            // Here we set loading to true because other currencies need to be
            // reloaded from the api
            return {...state, ...{ loading: true,
                                    selectedCurrency: action.item }};
        default:
            return {...state};
    }
};
