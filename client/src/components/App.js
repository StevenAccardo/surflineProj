import React, { Component } from 'react';
import { sockConnect } from '../socket';
import Header from './header';
import MapLegend from './mapLegend';
import BuoyMap from './buoyMap';

class App extends Component {
  componentDidMount() {
    sockConnect();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MapLegend />
        <BuoyMap />
        <div className="directions">
          <h3 className="directions-1">Click the icons for more details!</h3>
        </div>
      </div>
    );
  }
}

export default App;
