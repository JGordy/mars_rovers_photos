import React, { Component } from 'react';
import '../styles/App.css';

import GetImageForm from './GetImageForm';

const API_KEY = "oN9Ew3iedAkuVhQbsgl7GL78wg0fUQZseofFO6aK";


class App extends Component {
  render() {
    return (
      <div className="App">
        <GetImageForm/>
      </div>
    );
  }
}

export default App;
