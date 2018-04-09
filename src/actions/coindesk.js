import axios from "axios";

function returnData(type, data){
  return{
    type: type,
    item:data
  }
}
export function getBTCCoindesk() {
    return(dispatch)=>{
        return axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((response)=>{
            dispatch(returnData("FULLFILL_GET_BTC_CD", response.data));
        })
    }
}
export function startLoadingBTCCoindesk() {
    return {
        type: "START_GETTING_BTC_CD",
    }
}
export function changeCurrencyToUSD() {
    return returnData("CHANGE_CURRENCY_CD", "USD");
}
export function changeCurrencyToGBP() {
    return returnData("CHANGE_CURRENCY_CD", "GBP");
}
export function changeCurrencyToEUR() {
    return returnData("CHANGE_CURRENCY_CD", "EUR");
}
