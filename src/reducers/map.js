let defaultState={
    lat: 34.403561,
    lng: -77.957617,
    isOpen: false
}

export default (state=defaultState,action)=>{
    switch(action.type) {
        case 'CHANGE_VIEW_LAT_LON_US':
        case 'CHANGE_VIEW_LAT_LON_EUR':
        case 'CHANGE_VIEW_LAT_LON_UK':
            return {...state, ...action.item};
        case 'CLOSE_INFOWINDOW':
            return {...state, isOpen: false};
        case 'OPEN_INFOWINDOW':
            return {...state, isOpen: true};
        default:
            return {...state};
    }
};
