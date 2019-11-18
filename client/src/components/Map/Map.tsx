import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact, { Maps, MapOptions } from 'google-map-react';
import { ListingResponse } from '../../interfaces';
import { Marker } from './Marker/Marker';
import './Map.scss';
import { StoreState } from '../../store/rootReducer';

interface MapProps {
  store?: any;
  listings: ListingResponse[];
}

interface MapState {
  center: {
    lat: number;
    lng: number;
  };
}

class MapWithMarkers extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
      center: {
        lat: 51.5343,
        lng: 0.099356
      }
    };
  }

  getMapBounds = (map: any, maps: any, locations: any) => {
    const bounds = new maps.LatLngBounds();

    locations.forEach((location: { lat: number; lon: number }) => {
      bounds.extend(new maps.LatLng(location.lat, location.lon));
    });
    return bounds;
  };

  bindResizeListener = (map: any, maps: any, bounds: any) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  apiIsLoaded = (map: any, maps: any, locations: any) => {
    if (map) {
      const bounds = this.getMapBounds(map, maps, locations);
      map.fitBounds(bounds);
      this.bindResizeListener(map, maps, bounds);
    }
  };

  renderMarkers = () => {
    const { listings } = this.props;
    return listings.map((listing, index) => (
      <Marker
        key={index}
        data-test="marker"
        lat={+listing.latitude}
        lng={+listing.longitude}
      />
    ));
  };

  getOptions = (maps: Maps): MapOptions => {
    return {
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.TOP_LEFT,
        mapTypeIds: [
          maps.MapTypeId.ROADMAP,
          maps.MapTypeId.SATELLITE,
          maps.MapTypeId.HYBRID
        ]
      },
      rotateControl: true,
      rotateControlOptions: { position: 1 },
      streetViewControl: true,
      heading: 90,
      streetViewControlOptions: { position: 1 },
      scaleControl: true,
      clickableIcons: true,
      scrollwheel: true,
      zoomControlOptions: { position: 9 }
    };
  };

  render() {
    const { center } = this.state;
    const { listings } = this.props;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        {listings.length > 0 ? (
          <GoogleMapReact
            zoom={16}
            center={center}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {
              const data = listings.map(listing => ({
                lat: listing.latitude,
                lon: listing.longitude
              }));
              this.apiIsLoaded(map, maps, data);
            }}
            bootstrapURLKeys={{
              key: ''
            }}
            options={this.getOptions}
          >
            {this.renderMarkers()}
          </GoogleMapReact>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ listings }: StoreState) => ({ listings });

export default connect(mapStateToProps)(MapWithMarkers);
