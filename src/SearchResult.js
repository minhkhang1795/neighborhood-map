import React, {Component} from 'react';

class SearchResult extends Component {
  render() {
    const {places} = this.props;

    return (
      <div className="search-result-grid">
        <ol>
          {places && places.constructor === Array && places.map((place) =>
            <li key={place.venue.id} onClick={() => this.props.onFetchVenueDetail(place.venue.id)}>{place.venue.name}</li>
          )}
        </ol>
      </div>
    )
  }
}

export default SearchResult