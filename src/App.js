import React, { Component, Fragment } from 'react';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="app">
          <Header />
        </div>
      </Fragment>
    );
  }
}

export default App;
