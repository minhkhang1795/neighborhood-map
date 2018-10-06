import React, {Component} from 'react';
import './App.css';
import MapComponent from "./MapComponent";
import PanelComponent from "./PanelComponent";

class App extends Component {
  render() {
    return (
      <div>
        <div className="map-container">
          <MapComponent isMarkerShown={true}/>
        </div>
        <PanelComponent/>

      </div>
    );
  }
}

export default App;
