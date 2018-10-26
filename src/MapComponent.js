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
    defaultCenter={props.ll}
    defaultOptions={DEFAULT_OPTION}>

    {/* Add markers based on props.places. onMarkerClick() updates focusedPlace in the parent component */}
    {props.isMarkerShown && props.places && props.places.constructor === Array && props.places.map((place) =>
      <Marker key={place.venue.id}
              position={{lat: place.venue.location.lat, lng: place.venue.location.lng}}
              onClick={() => props.onMarkerClick(place.venue.id)}
              animation={props.focusedPlace ? props.focusedPlace.id === place.venue.id ? window.google.maps.Animation.BOUNCE : null : null}>
        {/* Add info window of the focused place */}
        {props.focusedPlace && props.focusedPlace && props.focusedPlace.location && props.focusedPlace.id === place.venue.id &&
        <InfoWindow position={{lat: props.focusedPlace.location.lat, lng: props.focusedPlace.location.lng}}
                    onCloseClick={props.onToggleClose}>
          <div className="info-window" tabIndex={0}>
            <h3>{props.focusedPlace.name}</h3>
            <p>{props.focusedPlace.location.formattedAddress[0] + (props.focusedPlace.location.formattedAddress[1] ?
              ', ' + props.focusedPlace.location.formattedAddress[1] : '')}</p>
            {props.focusedPlace.bestPhoto &&
            <img src={props.focusedPlace.bestPhoto.prefix + `300x300` + props.focusedPlace.bestPhoto.suffix}
                 alt={`Image of ` + props.focusedPlace.name}/>}
          </div>
        </InfoWindow>}
      </Marker>)}
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
        onToggleClose={this.props.clearFocusedPlace}
      />
    )
  }
}

// Map style
const DEFAULT_OPTION = {
  mapTypeControl: false, styles: [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [{
        "visibility": "on"
      }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#5f94ff"
      },
        {
          "lightness": 26
        },
        {
          "gamma": 5.86
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "weight": 0.6
      },
        {
          "saturation": -85
        },
        {
          "lightness": 61
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "hue": "#0066ff"
      },
        {
          "saturation": 74
        },
        {
          "lightness": 100
        }
      ]
    }
  ]
};

export default MyMapComponent