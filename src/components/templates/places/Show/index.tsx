import React from 'react'
import { Channel, Place } from '../../../../interfaces'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
  place: Place
}

export const PlacesShowTemplate: React.FC<Props> = ({ channel, place }) => (
  <>
    <MapHeader channel={channel} />
    <p>{place.name}</p>
    <Nav />
  </>
)
