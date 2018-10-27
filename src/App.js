import React, {Component} from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp'
import MyMapComponent from "./MapComponent";
import PanelComponent from "./PanelComponent";
import ErrorBoundary from "./ErrorBoundary";
import * as PlaceAPI from './PlaceAPI'

const lat = 42.3784207, lng = -71.1304621;

window.gm_authFailure = () => {
  alert("Cannot connect to Google Maps service.")
};

class App extends Component {

  state = {
    places: [],
    focusedPlace: null,
    query: '',
    showError: false
  };

  componentDidMount() {
    this.fetchPlaces('coffee');
  }

  updateQuery(query) {
    this.setState({query: query.trim()});
  }

  fetchPlaces(query) {
    PlaceAPI.explore(lat, lng, query).then((places) => {
      if (places) {
        this.setState({places: places, showError: false});
      } else
        this.setState({showError: true});
    }).catch((e) => {
      this.setState({showError: true});
    });
  }

  updateFocusedPlace(id) {
    let places = this.state.places;
    const index = places.findIndex(place => place.venue.id === id);
    if (index >= 0) {
      this.setState({focusedPlace: places[index].venue});
      if (!places[index].venue.updated) {
        this.fetchFocusedPlaceDetail(id, index, places); // Fetch data from Foursquare
      }
    }
  }

  fetchFocusedPlaceDetail(id, index, places) {
    const ctx = this;
    PlaceAPI.getDetails(id).then((venue) => {
      if (venue && venue.location) {
        places[index].venue = venue;
        places[index].venue.updated = true; // Flag to indicate that this venue is already fetched
        ctx.setState({places: places, focusedPlace: venue, showError: false});
      } else
        this.setState({showError: true});
    }).catch((e) => {
      this.setState({showError: true});
    });
  }

  clearFocusedPlace() {
    this.setState({focusedPlace: null});
  }

  onCloseErrorModal() {
    this.setState({showError: false});
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
      <div role="main">
        {/* Error modal */}
        {this.state.showError && <div className="error-modal">
          <div className="error-modal-content">
            <span role={"button"} className="error-modal-close" onClick={() => this.onCloseErrorModal()}>&times;</span>
            <p>Failed to fetch data from Foursquare!</p>
          </div>
        </div>}

        {/* Google map */}
        <div role="application" className="map-container">
          <ErrorBoundary>
            <MyMapComponent ll={{lat: lat, lng: lng}}
                            isMarkerShown={true}
                            onUpdateFocusedPlace={(id) => this.updateFocusedPlace(id)}
                            places={showingPlaces}
                            focusedPlace={focusedPlace}
                            clearFocusedPlace={() => this.clearFocusedPlace()}/>
          </ErrorBoundary>
        </div>
        {/* Search panel */}
        <aside>
          <PanelComponent places={showingPlaces}
                          query={query}
                          onQueryChange={(e) => this.updateQuery(e.target.value)}
                          onUpdateFocusedPlace={(id) => this.updateFocusedPlace(id)}/>
        </aside>
      </div>
    );
  }
}

export default App;
