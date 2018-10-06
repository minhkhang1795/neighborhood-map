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
          <MyMapComponent places={showingPlaces} ll={{lat: lat, lng: lng}} isMarkerShown={true}/>
        </div>
        <PanelComponent places={showingPlaces} query={this.props.query} onQueryChange={(e) => this.updateQuery(e.target.value)}/>
      </div>
    );
  }
}

export default App;
