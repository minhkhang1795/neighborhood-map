import React, {Component} from 'react';

class SearchResult extends Component {

  /*
  Function to handle Enter key pressed on a list item
   */
  handleOnKeyPressed = function(e, place) {
    if (e.key === "Enter")
      this.props.onUpdateFocusedPlace(place.venue.id);
  };

  render() {
    const {places} = this.props;

    return (
      <div className="search-result-grid">
        <ol tabIndex={this.props.isHidden ? -1 : 0} role={"list"}>
          {places && places.constructor === Array && places.map((place) =>
            <li tabIndex={this.props.isHidden ? -1 : 0}
                key={place.venue.id}
                onClick={() => this.props.onUpdateFocusedPlace(place.venue.id)}
                onKeyPress={(e) => this.handleOnKeyPressed(e, place)}
                role={"listitem"}
            >{place.venue.name}</li>
          )}
        </ol>
      </div>
    )
  }
}

export default SearchResult