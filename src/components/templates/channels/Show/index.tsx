import React from 'react'
import { Community, Channel } from '../../../../interfaces'
import { ChannelLists } from '../../../organisms/lists/ChannelLists'
import { ChannelHeader } from '../../../organisms/headers/ChannelHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  community: Community
  channels: Channel[]
}

export const ChannelsShowTemplate: React.FC<Props> = ({
  community,
  channels,
}) => (
  <>
    <ChannelHeader community={community} />
    <ChannelLists channels={channels} />
    <Nav />
  </>
)
