import React, {Component} from 'react';
import SearchBar from "./SearchBar";

class PanelComponent extends Component {

  state = {
    visibility: 'show'
  };

  closePanel(e) {
    e.preventDefault();
    this.setState({visibility: 'hide'});
  }

  openPanel(e) {
    e.preventDefault();
    this.setState({visibility: 'show'});
  }

  render() {
    return (
      <div>
        <button className="panel-show-btn" onClick={(e) => this.openPanel(e)}>
          <i className="fas fa-chevron-right app-icon"/>
        </button>
        <div className={'panel-content ' + this.state.visibility}>
          <div id={'panel'} className="panel-main">
            <div className="panel-top">
              <SearchBar/>
            </div>
          </div>
          <div className="panel-bottom">
            <button className="panel-hide-btn" onClick={(e) => this.closePanel(e)}>
              <i className="fas fa-chevron-left app-icon"/> Hide
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PanelComponent