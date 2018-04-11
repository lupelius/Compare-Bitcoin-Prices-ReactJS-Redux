//import axios from "axios";

function returnData(type, data){
  return{
    type: type,
    item:data
  }
}

export function changeViewLatLonUS() {
    return returnData("CHANGE_VIEW_LAT_LON_US", { lat: 34.403561, lng: -77.957617 });
}

export function changeViewLatLonEUR() {
    return returnData("CHANGE_VIEW_LAT_LON_EUR", { lat: 51.046613, lng: 10.042871 });
}

export function changeViewLatLonGBP() {
    return returnData("CHANGE_VIEW_LAT_LON_UK", { lat: 51.510704, lng: -0.124976 });
}
export function closeInfoWindowState() {
    return returnData("CLOSE_INFOWINDOW");
}
export function openInfoWindowState() {
    return returnData("OPEN_INFOWINDOW");
}