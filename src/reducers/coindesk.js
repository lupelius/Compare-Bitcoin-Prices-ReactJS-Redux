let defaultState={
    bpi: {
      USD: {
        rate_float: 0
      },
      GBP: {
        rate_float: 0
      },
      EUR: {
        rate_float: 0
      }
    },
    loading: false,
    selectedCurrency: 'USD'
}

export default (state=defaultState,action)=>{
    switch(action.type) {
        case 'START_GETTING_BTC_CD':
            return {...state, ...{loading: true}};
        case 'FULLFILL_GET_BTC_CD':
            return {...state, ...action.item, ...{loading: false}};
        case 'CHANGE_CURRENCY_CD':
            // Here we set loading to false because other currencies are already
            // loaded
            return {...state, ...{ loading: false,
                                    selectedCurrency: action.item }};
        default:
            return {...state};
    }
};
