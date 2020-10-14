import React from 'react'
import { Channel, Place } from '../../../../interfaces'
import { PlaceLists } from '../../../organisms/lists/PlaceLists'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
  places: Place[]
}

export const PlacesShowTemplate: React.FC<Props> = ({ channel, places }) => (
  <>
    <MapHeader channel={channel} />
    <PlaceLists places={places} />
    <Nav />
  </>
)
