import React from 'react'
import { Channel, Place } from '../../../../interfaces'
import { ChannelLists } from '../../../organisms/lists/ChannelLists'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
  channels: Channel[]
  places: Place[]
}

export const ChannelsShowTemplate: React.FC<Props> = ({
  channel,
  channels,
  places,
}) => (
  <>
    <MapHeader channel={channel} />
    <ChannelLists channels={channels} />
    <p>{places[0].image}</p>
    <Nav />
  </>
)
