import React from 'react'
import { Channel, Place } from '../../../../interfaces'
import { Main } from '../../../atoms/Main'
import { PlaceLists } from '../../../organisms/lists/PlaceLists'
import { Map } from '../../../organisms/Map'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
  places: Place[]
}

export const ChannelsShowTemplate: React.FC<Props> = ({ channel, places }) => (
  <>
    <MapHeader channel={channel} />
    <Main withNav>
      <Map places={places} />
      <PlaceLists places={places} />
    </Main>
    <Nav />
  </>
)
