import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class PanelComponent extends Component {

  state = {
    visibility: 'show'
  };

  closePanel(e) {
    e.preventDefault();
    this.refs.hideButton.tabIndex = -1;
    this.setState({visibility: 'hide'});
  }

  openPanel(e) {
    e.preventDefault();
    this.refs.hideButton.tabIndex = 0;
    this.setState({visibility: 'show'});
  }

  render() {
    return (
      <div>
        {/* Open button to show the sliding panel */}
        {this.state.visibility === 'hide' && <button ref="showButton"
                                                     className="panel-show-btn"
                                                     aria-label={'show button'}
                                                     onClick={(e) => this.openPanel(e)}>
          <i className="fas fa-chevron-right common-icon"/>
        </button>}

        {/* Search bar and result list go here*/}
        <div className={'panel-content ' + this.state.visibility}>
          <div className="panel-main">
            <SearchBar query={this.props.query}
                       onQueryChange={(e) => this.props.onQueryChange(e)}
                       isHidden={this.state.visibility === 'hide'}/>

            {this.props.places.length === 0 && <p tabIndex={this.props.isHidden ? -1 : 0}
                                                  className="filter-no-result">No results found.</p>}

            <SearchResult onUpdateFocusedPlace={(id) => this.props.onUpdateFocusedPlace(id)}
                          places={this.props.places}
                          isHidden={this.state.visibility === 'hide'}/>
          </div>

          {/* Close button to hide the panel */}
          <div className="panel-bottom">
            <button ref="hideButton" className="panel-hide-btn" role={'button'} onClick={(e) => this.closePanel(e)}>
              <i className="fas fa-chevron-left common-icon"/> Hide
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PanelComponent