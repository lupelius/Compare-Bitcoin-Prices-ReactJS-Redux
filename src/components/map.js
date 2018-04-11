import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MapActions from '../actions/map';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 42.769240, lng: -33.880469 }}
  >
    <Marker
      position={{ lat: props.map.lat, lng: props.map.lng }}
      onClick={props.onMarkerClick}
    >
      {props.map.isOpen && <InfoWindow onCloseClick={props.onMarkerClick}>
        <div>Ta di da</div>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
  }

  componentDidMount() {
  }

  handleMarkerClick = () => {
    if (this.props.map.isOpen) {
        this.props.action.closeInfoWindowState();
    } else {
        this.props.action.openInfoWindowState();
    }
  }

  render() {
    return (
      <MyMapComponent
        onMarkerClick={this.handleMarkerClick}
        map={this.props.map}
      />
    )
  }
}
function mapStateToProps(state) {
    return {
        map: state.map
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(MapActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyFancyComponent);

// import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as MapActions from '../actions/map';

// const { compose, withProps, withStateHandlers } = require("recompose");
// const {  withScriptjs,  withGoogleMap,  GoogleMap,  Marker,  InfoWindow,} = require("react-google-maps");


// class MapWithAMakredInfoWindow extends Component {
    // constructor(props) {
        // super(props);
        // this.state = {};
        // this.onToggleOpen = this.onToggleOpen.bind(this);
    // }
    // componentWillMount() {
    // }
    
    // onToggleOpen() {
        // if (this.props.map.isOpen) {
            // this.props.action.closeInfoWindowState();
        // } else {
            // this.props.action.openInfoWindowState();
        // }
    // }
 
    // render() {
       // const MyMapComponent = compose(
              // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
                // loadingElement={<div style={{ height: `100%` }} />},
                // containerElement={<div style={{ height: `400px` }} />},
                // mapElement={<div style={{ height: `100%` }} />},
              // withScriptjs,withGoogleMap)
       // (props =>
          // <GoogleMap
            // defaultZoom={4}
            // defaultCenter={{ lat: 34.403561, lng: -77.957617 }}
          // >
            // <Marker
              // position={{ lat: 34.403561, lng: -77.957617 }}
              // onClick={this.onToggleOpen}
            // >
              // {props.map.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
                // <div>Ta di da</div>
              // </InfoWindow>}
            // </Marker>
          // </GoogleMap>
        // );
        // return (
          // <div>  
            // <MyMapComponent />
          // </div>
        // );
    // }
// }
// function mapStateToProps(state) {
    // return {
        // map: state.map
    // }
// }

// function mapDispatchToProps(dispatch) {
    // return {
        // action: bindActionCreators(MapActions, dispatch)
    // }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MapWithAMakredInfoWindow);

// export default compose(
  // withStateHandlers(() => ({
    // isOpen: false,
  // }), {
    // onToggleOpen: ({ isOpen }) => () => ({
      // isOpen: !isOpen,
    // })
  // }),
  // withScriptjs,
  // withGoogleMap
// )(props =>
  // <GoogleMap
    // defaultZoom={4}
    // defaultCenter={{ lat: 34.403561, lng: -77.957617 }}
  // >
    // <Marker
      // position={{ lat: 34.403561, lng: -77.957617 }}
      // onClick={props.onToggleOpen}
    // >
      // {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        // <div>Ta di da</div>
      // </InfoWindow>}
    // </Marker>
  // </GoogleMap>
// );