import React, {Component} from 'react';

const WAIT_INTERVAL = 1000;

class SearchBar extends Component {
  state = {
    query: '',
  };

  updateQuery(query) {
    this.setState({query: query});
    const ctx = this;

    if (this.timeout)
      clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      // BooksAPI.search(query).then(function (books) {
      //   // Check book ids to set their valid shelf
      //   if (books && books.constructor === Array) {
      //     if (ctx.props.currentBooks && ctx.props.currentBooks.constructor === Array) {
      //       for (let i = 0; i < books.length; i++) {
      //         for (let j = 0; j < ctx.props.currentBooks.length; j++) {
      //           if (ctx.props.currentBooks[j].id === books[i].id) {
      //             books[i].shelf = ctx.props.currentBooks[j].shelf;
      //           }
      //         }
      //       }
      //     }
      //   }
      //
      //   // Update state
      //   ctx.setState({
      //     books: books
      //   })
      // })
    }, WAIT_INTERVAL);
  }

  render() {
    const {query} = this.state;

    return (
      <div className="panel-top">
        <i className="fas fa-search common-icon"/>
        <input className="searchbar-input"
          type="text"
          placeholder="Search your neighborhood"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
    )
  }

}

export default SearchBar