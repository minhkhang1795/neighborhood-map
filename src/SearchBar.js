import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div tabIndex={this.props.isHidden ? -1 : 0} role={'search'} className="panel-top">
        <i className="fas fa-search common-icon"/>
        <input tabIndex={this.props.isHidden ? -1 : 0} className="searchbar-input"
               type="search"
               aria-label={'Search your neighborhood'}
               placeholder="Search your neighborhood"
               value={this.props.query}
               onChange={(e) => this.props.onQueryChange(e)}
        />
      </div>
    )
  }

}

export default SearchBar