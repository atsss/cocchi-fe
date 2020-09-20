import React from 'react'
import { Community, Channel } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'
import { ChannelHeader } from '../../../organisms/headers/ChannelHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  community: Community
  channels: Channel[]
}

export const ChannelsIndexTemplate: React.FC<Props> = ({
  community,
  channels,
}) => (
  <>
    <ChannelHeader community={community} />
    <Section>
      {channels.map((channel: Channel) => (
        <p>{channel.name}</p>
      ))}
    </Section>
    <Nav />
  </>
)
