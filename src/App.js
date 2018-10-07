import React, {Component} from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp'
import MyMapComponent from "./MapComponent";
import PanelComponent from "./PanelComponent";
import * as PlaceAPI from './PlaceAPI'

const lat = 42.3784207;
const lng = -71.1304621;

class App extends Component {

  state = {
    places: [],
    focusedPlace: null,
    query: ''
  };

  updateQuery(query) {
    this.setState({query: query.trim()});
  }

  componentDidMount() {
    this.getPlaces('coffee');
  }

  getPlaces(query) {
    PlaceAPI.explore(lat, lng, query).then((places) => {
      console.log(places);
      this.setState({places: places});
    });
  }

  updateFocusedPlace(id) {
    let places = this.state.places;
    const index = places.findIndex(place => place.venue.id === id);
    if (index >= 0) {
      this.setState({focusedPlace: places[index].venue});
      if (!places[index].venue.updated) {
        this.fetchFocusedPlaceDetail(id, index, places);
      }
    }
  }

  fetchFocusedPlaceDetail(id, index, places) {
    const ctx = this;
    PlaceAPI.getDetails(id).then((venue) => {
      console.log(venue);
      if (venue && venue.location) {
        places[index].venue = venue;
        places[index].venue.updated = true; // Flag to indicate that this venue is already fetched
        ctx.setState({places: places, focusedPlace: venue});
      }
    }).catch((e) => {
      console.log(e)
    });
  }

  clearFocusedPlace() {
    this.setState({focusedPlace: null});
  }

  render() {
    const {places, focusedPlace, query} = this.state;

    let showingPlaces;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = places.filter((place) => match.test(place.venue.name));
    } else {
      showingPlaces = places;
    }

    return (
      <div>
        <div className="map-container">
          <MyMapComponent ll={{lat: lat, lng: lng}}
                          isMarkerShown={true}
                          onUpdateFocusedPlace={(id) => this.updateFocusedPlace(id)}
                          places={showingPlaces}
                          focusedPlace={focusedPlace}
                          clearFocusedPlace={() => this.clearFocusedPlace()}/>
        </div>
        <PanelComponent places={showingPlaces}
                        query={query}
                        onQueryChange={(e) => this.updateQuery(e.target.value)}
                        onUpdateFocusedPlace={(id) => this.updateFocusedPlace(id)}/>
      </div>
    );
  }
}

export default App;
