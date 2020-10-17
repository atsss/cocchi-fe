import React from 'react'
import { Channel, Place } from '../../../../interfaces'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  one: Channel
  two: Place
}

export const PlacesShowTemplate: React.FC<Props> = ({ one, two }) => (
  <>
    <MapHeader channel={one} />
    <p>{two.name}</p>
    <Nav />
  </>
)
