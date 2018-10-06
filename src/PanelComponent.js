import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

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
        {/* Open button to show the sliding panel */}
        <button className="panel-show-btn" onClick={(e) => this.openPanel(e)}>
          <i className="fas fa-chevron-right common-icon"/>
        </button>

        {/* Search bar and result list go here*/}
        <div className={'panel-content ' + this.state.visibility}>
          <div id={'panel'} className="panel-main">
            <SearchBar/>
            <SearchResult/>
          </div>

          {/* Close button to hide the panel */}
          <div className="panel-bottom">
            <button className="panel-hide-btn" onClick={(e) => this.closePanel(e)}>
              <i className="fas fa-chevron-left common-icon"/> Hide
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PanelComponent