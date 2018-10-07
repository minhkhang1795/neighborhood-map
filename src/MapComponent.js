import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCx7CZ1P0YdqirwlJ4jPdrMO20NQwSPkbI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `100%`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.ll}>
    {props.isMarkerShown && props.places && props.places.constructor === Array && props.places.map((place) =>
      <Marker key={place.venue.id}
              position={{lat: place.venue.location.lat, lng: place.venue.location.lng}}
              onClick={() => props.onMarkerClick(place.venue.id)}>

      </Marker>)}
    {props.isMarkerShown && props.focusedPlace && props.focusedPlace.venue && props.focusedPlace.venue.location
    && <InfoWindow position={{lat: props.focusedPlace.venue.location.lat, lng: props.focusedPlace.venue.location.lng}}
                   onCloseClick={props.onToggleClose}>
      <div>
        <h3>{props.focusedPlace.venue.name}</h3>
      </div>
    </InfoWindow>}
  </GoogleMap>
);

class MyMapComponent extends React.PureComponent {

  render() {
    return (
      <MapComponent
        ll={this.props.ll}
        isMarkerShown={this.props.isMarkerShown}
        places={this.props.places}
        focusedPlace={this.props.focusedPlace}
        onMarkerClick={(id) => this.props.onUpdateFocusedPlace(id)}
      />
    )
  }
}

export default MyMapComponent