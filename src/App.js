import React, {Component} from 'react';
import './App.css';
import MyMapComponent from "./MapComponent";
import PanelComponent from "./PanelComponent";
import * as PlaceAPI from './PlaceAPI'

const lat = 42.3784207;
const lng = -71.1304621;

class App extends Component {

  state = {
    places: []
  };

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
    return (
      <div>
        <div className="map-container">
          <MyMapComponent places={this.state.places} isMarkerShown={true}/>
        </div>
        <PanelComponent places={this.state.places}/>
      </div>
    );
  }
}

export default App;
