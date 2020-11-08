import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Place } from '../../../interfaces'
import { Marker } from '../../atoms/Marker'

interface Props {
  places: Place[]
  zoom?: number
}

export const Map: React.FC<Props> = ({ places, zoom = 11 }) => {
  const center = {
    lat: places[0].lat,
    lng: places[0].lng,
  }
  const key = process.env.REACT_APP_GOOGLE_MAP_API || ''

  return (
    <section style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {places.map((element: Place) => (
          <Marker lat={element.lat} lng={element.lng} name={element.name} />
        ))}
      </GoogleMapReact>
    </section>
  )
}
