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

  fetchAndUpdateVenueDetails(id) {
    const ctx =this;
    let places = ctx.state.places;
    let index = places.findIndex(place => place.venue.id === id);

    if (index >= 0 && !places[index].venue.updated) {
      PlaceAPI.getDetails(id).then((venue) => {
        console.log(venue);
        places[index].venue = venue;
        places[index].venue.updated = true; // Flag to indicate that this venue is already fetched
        ctx.setState({places: places});
      }).catch((e) => {
        console.log(e)
      });
    }
  }

  render() {
    const {places, query} = this.state;

    let showingPlaces;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingPlaces = places.filter((place) => match.test(place.venue.name));
    } else {
      showingPlaces = places;
    }

    return (
      <div>
        <div className="map-container">
          <MyMapComponent onFetchVenueDetail={(id) => this.fetchAndUpdateVenueDetails(id)} places={showingPlaces} ll={{lat: lat, lng: lng}} isMarkerShown={true}/>
        </div>
        <PanelComponent places={showingPlaces}
                        query={this.props.query}
                        onQueryChange={(e) => this.updateQuery(e.target.value)}
                        onFetchVenueDetail={(id) => this.fetchAndUpdateVenueDetails(id)}/>
      </div>
    );
  }
}

export default App;
