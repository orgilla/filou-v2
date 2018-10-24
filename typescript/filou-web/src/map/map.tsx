import * as React from 'react';
import { FelaComponent, IFelaRule } from '@filou/core';
const ReactMap = require('google-map-react').default;

const defaultCenter = { lat: 59.938043, lng: 30.337157 };
const defaultZoom = 9;

interface IGeo {
  lat: number;
  lng: number;
}
interface IMarker extends IGeo {
  lat: number;
  lng: number;
  className?: string;
  active?: boolean;
  onHover?: () => void;
}
const markerRule = ({ active, theme, onHover }: IFelaRule<IMarker>) => ({
  display: 'block',
  fill: active ? theme.color : theme.dark2,
  // opacity: !onHover || active || $hover ? 1 : 0.8,
  cursor: !!onHover && 'pointer'
});
const Marker: React.SFC<IMarker> = ({ className, active, onHover }) => (
  <FelaComponent
    rule={markerRule}
    active={active}
    onHover={onHover}
    className={className}
    render={({ className }) => (
      <svg
        onMouseOver={onHover}
        className={className}
        width={40}
        height={40}
        viewBox="0 0 1792 1792"
      >
        <path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z" />
      </svg>
    )}
  />
);

const googleMapStyle = {
  height: '100%',
  width: '100%',
  '& *': {
    overflow: 'visible'
  }
};

interface IGoogleMap {
  className?: string;
  center?: IGeo;
  zoom?: number;
  apiKey: string;
  options?: any;
}
class GoogleMap extends React.Component<IGoogleMap> {
  static Marker = Marker;
  static defaultProps = {
    center: defaultCenter,
    zoom: defaultZoom,
    apiKey: process.env.GOOGLE_MAPS_KEY
  };
  render() {
    const {
      children,
      className,
      center,
      zoom,
      apiKey,
      options,
      ...rest
    } = this.props;
    return (
      <FelaComponent
        style={googleMapStyle}
        className={className}
        render={({ className }) => (
          <div className={className}>
            <ReactMap
              defaultCenter={defaultCenter}
              center={center}
              defaultZoom={defaultZoom}
              zoom={zoom}
              bootstrapURLKeys={{ key: apiKey }}
              {...rest}
              options={{
                minZoomOverride: true,
                minZoom: 2,
                ...(options || {})
              }}
              {...rest}
            >
              {children}
            </ReactMap>
          </div>
        )}
      />
    );
  }
}

export default GoogleMap;
