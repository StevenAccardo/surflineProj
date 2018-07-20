import React, { Component } from 'react';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux';
import { subscribeToBuoys } from '../socket';
import hangRed from '../../assets/images/hang-red.png';
import hangYellow from '../../assets/images/hang-yellow.png';
import hangGreen from '../../assets/images/hang-green.png';

class BuoyMap extends Component {
  constructor(props) {
    super(props);

    //binds method to scope
    this.handleMapChange = this.handleMapChange.bind(this);
  }

  //As soon as map loads, get bounds
  componentDidMount() {
    const bounds = this.refs.map.leafletElement.getBounds();
    this.extractBounds(bounds);
  }

  //invoked on map zoom or scroll. Invoked on any movement. I chose this option instead of waiting for mapmovement to end ex. MoveEnd and Zoomend as to provide a more dynamic experience for the user, however firing  of requests so quickly may have unintended results, but I haven't noticed any. If that were the case, you could debounce the request or tie it to setTimer method to slow it down.
  handleMapChange() {
    const bounds = this.refs.map.leafletElement.getBounds();
    this.extractBounds(bounds);
  }

  //Breaks bounds down into finer detail
  //I had to implement these checks because I couldn't get the setMaxBounds() method to actually set the max bound  limits, so in order to keep the data from being sent to the server with wrong bounds, I limit them manually. This ensures that we don't error out and not update the UI when in a zoomed out state.
  extractBounds(bounds) {
    const boundsObj = {
      south: bounds.getSouth() >= -90 ? bounds.getSouth() : -90,
      west: bounds.getWest() >= -180 ? bounds.getWest() : -180,
      north: bounds.getNorth() <= 90 ? bounds.getNorth() : 90,
      east: bounds.getEast() <= 180 ? bounds.getEast() : 180
    };
    //fires off  request to server with bounds data to subscribe to new buoys
    subscribeToBuoys(boundsObj);
  }

  //determines color of icon based off of data
  chooseColor({ height, period }) {
    if (period < 12) {
      return hangRed;
    } else if (height < 12) {
      return hangYellow;
    } else {
      return hangGreen;
    }
  }

  //Dynamically creates  markers and popups
  createMarkers() {
    const { buoys } = this.props;
    return buoys.map(buoy => {
      const swellIcon = new Leaflet.Icon({
        iconUrl: this.chooseColor(buoy),
        iconSize: [40, 40]
      });
      const pos = [buoy.lat, buoy.lon];
      return (
        <Marker icon={swellIcon} position={pos} key={buoy.name}>
          <Popup>
            <h4 className="map__buoy-name">{buoy.name}</h4>
            <p className="map__buoy-height">Swell Height: {buoy.height} ft.</p>
            <p className="map__buoy-period">Swell Period: {buoy.period} sec.</p>
          </Popup>
        </Marker>
      );
    });
  }

  render() {
    const position = [33.6572439, -118.0033536];
    return (
      <Map className="map" center={position} zoom={10} ref="map" onZoom={this.handleMapChange} onMove={this.handleMapChange}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
        {this.createMarkers()}
      </Map>
    );
  }
}

//Pulls buoys array off of state object and makes available in props
const mapStateToProps = ({ buoys }) => ({ buoys });
export default connect(mapStateToProps)(BuoyMap);
