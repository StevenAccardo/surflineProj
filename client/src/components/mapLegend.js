import React from 'react';
import hangRed from '../../assets/images/hang-red.png';
import hangYellow from '../../assets/images/hang-yellow.png';
import hangGreen from '../../assets/images/hang-green.png';
const MapLegend = props => {
  return (
    <div className="legend">
      <div className="legend__condition">
        <img src={hangGreen} alt="marker" className="legend__img" />
        <span className="legend__desc">Good</span>
      </div>
      <div className="legend__condition">
        <img src={hangYellow} alt="marker" className="legend__img" />
        <span className="legend__desc">Fair</span>
      </div>
      <div className="legend__condition">
        <img src={hangRed} alt="marker" className="legend__img" />
        <span className="legend__desc">Poor</span>
      </div>
    </div>
  );
};

export default MapLegend;
