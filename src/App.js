import React, { Component } from 'react';
import './App.scss';

import Header from './containers/Header/Header';
import WasteWizard from './containers/WasteWizard/WasteWizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WasteWizard />
      </div>
    );
  }
}

export default App;
