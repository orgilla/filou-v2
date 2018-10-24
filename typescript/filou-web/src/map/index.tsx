import * as React from 'react';
import { FelaComponent } from '@filou/core';
import Maps from './map';
const sortBy = require('lodash/sortBy');

const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const p = 0.017453292519943295; // Math.PI / 180
  const c = Math.cos;
  const a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
};

interface IMap {
  apiKey: string;
  items: Array<IMarker>;
}

interface IMarker {
  lat: number;
  lng: number;
  id?: string | number;
}

class Map extends React.Component<IMap> {
  state = {
    activeMarker: null,
    lat: 51.165691,
    lng: 10.451526,
    searchResult: {}
  };

  render() {
    const { apiKey } = this.props;
    const { lat, lng, activeMarker } = this.state;
    const items = sortBy(
      (this.props.items || []).filter(item => !!item.lat).map(item => ({
        ...item,
        distance: getDistance(item.lat, item.lng, lat, lng)
      })),
      'distance'
    );

    return (
      <FelaComponent
        style={{
          width: '100%',
          // height: 500,
          display: 'block',
          position: 'absolute',
          top: 0,
          opacity: 0.2,
          // left: 0,
          height: '100%',
          zIndex: -1
        }}
      >
        <Maps center={{ lat, lng }} zoom={8} apiKey={apiKey}>
          {items.map(({ lat, lng, id }: IMarker, i: number) => (
            <Maps.Marker
              key={id || `${lat}${lng}`}
              lat={lat}
              lng={lng}
              active={activeMarker === (id || `${lat}${lng}`)}
              onHover={() =>
                this.setState({ activeMarker: id || `${lat}${lng}` })
              }
            />
          ))}
        </Maps>
      </FelaComponent>
    );
  }
}

export default Map;
