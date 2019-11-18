import React from 'react';

interface Marker {
  lat: number;
  lng: number;
}

export const Marker: React.FC<Marker> = () => (
  <div className="circle" role="presentation"></div>
);
