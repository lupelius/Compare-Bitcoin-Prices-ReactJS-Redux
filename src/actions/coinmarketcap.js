import axios from "axios";

function returnData(type, data){
  return{
    type: type,
    item:data
  }
}
export function getBTCCoinmarketcapEUR() {
    return(dispatch)=>{
        return axios.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR").then((response)=>{
            setTimeout(dispatch(returnData("FULLFILL_GET_BTC_CMC", response.data[0])),3000)
            ;
        })
    }
}
export function getBTCCoinmarketcapGBP() {
    return(dispatch)=>{
        return axios.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=GBP").then((response)=>{
            setTimeout(dispatch(returnData("FULLFILL_GET_BTC_CMC", response.data[0])),3000);
        })
    }
}
export function getBTCCoinmarketcapUSD() {
    return(dispatch)=>{
        return axios.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=USD").then((response)=>{
            setTimeout(dispatch(returnData("FULLFILL_GET_BTC_CMC", response.data[0])),3000);
        })
    }
}
export function startLoadingBTCCoinmarketcap() {
    return {
        type: "START_GETTING_BTC_CMC",
    }
}
export function changeCurrencyToUSD() {
    return returnData("CHANGE_CURRENCY_CMC", "USD");
}
export function changeCurrencyToGBP() {
    return returnData("CHANGE_CURRENCY_CMC", "GBP");
}
export function changeCurrencyToEUR() {
    return returnData("CHANGE_CURRENCY_CMC", "EUR");
}
