import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="gm-error-infobox">
          <h1>
            Oops! Something went wrong.
          </h1>
          <p>This page didn't load Google Maps correctly. See the JavaScript console
            for technical details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;