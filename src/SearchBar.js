import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="panel-top">
        <i className="fas fa-search common-icon"/>
        <input className="searchbar-input"
          type="text"
          placeholder="Search your neighborhood"
          value={this.props.query}
          onChange={(e) => this.props.onQueryChange(e)}
        />
      </div>
    )
  }

}

export default SearchBar