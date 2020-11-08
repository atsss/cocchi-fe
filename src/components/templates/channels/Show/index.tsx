import React from 'react'
import { Channel, Place } from '../../../../interfaces'
import { PlaceLists } from '../../../organisms/lists/PlaceLists'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'
import { Map } from '../../../organisms/Map'

interface Props {
  channel: Channel
  places: Place[]
}

export const ChannelsShowTemplate: React.FC<Props> = ({ channel, places }) => (
  <>
    <MapHeader channel={channel} />
    <Map places={places} />
    <PlaceLists places={places} />
    <Nav />
  </>
)
