import React from 'react'
import { Channel } from '../../../../interfaces'
import { ChannelLists } from '../../../organisms/lists/ChannelLists'
import { MapHeader } from '../../../organisms/headers/MapHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
  channels: Channel[]
}

export const ChannelsShowTemplate: React.FC<Props> = ({
  channel,
  channels,
}) => (
  <>
    <MapHeader channel={channel} />
    <ChannelLists channels={channels} />
    <Nav />
  </>
)
