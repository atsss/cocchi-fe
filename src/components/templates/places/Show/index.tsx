import React from 'react'
import { Place } from '../../../../interfaces'
import { PlaceHeader } from '../../../organisms/headers/PlaceHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  place: Place
}

export const PlacesShowTemplate: React.FC<Props> = ({ place }) => (
  <>
    <PlaceHeader place={place} />
    <p>{place.name}</p>
    <Nav />
  </>
)
