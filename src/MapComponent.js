import React from "react"
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

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
    {props.isMarkerShown && props.places.constructor === Array && props.places.map((place) =>
      <Marker key={place.venue.id} position={{lat: place.venue.location.lat, lng: place.venue.location.lng}}
              onClick={() => props.onMarkerClick(place.venue.id)}/>)}
  </GoogleMap>
);

class MyMapComponent extends React.PureComponent {

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true})
    }, 3000)
  };

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false});
    this.delayedShowMarker()
  };

  render() {
    return (
      <MapComponent
        places={this.props.places}
        ll={this.props.ll}
        isMarkerShown={this.props.isMarkerShown}
        onMarkerClick={(id) => this.props.onFetchVenueDetail(id)}
      />
    )
  }
}

export default MyMapComponent