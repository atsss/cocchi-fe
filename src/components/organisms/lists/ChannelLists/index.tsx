import React from 'react'
import { useHistory } from 'react-router-dom'
import { Channel } from '../../../../interfaces'
import { BlockButton } from '../../../atoms/Button'
import { Section } from '../../../atoms/Section'
import { SubTxt } from '../../../atoms/Txt'
import { ChannelList } from '../../../molecules/lists/ChannelList'

interface Props {
  channels: Channel[]
}

export const ChannelLists: React.FC<Props> = ({ channels }) => {
  const history = useHistory()

  return (
    <Section>
      <BlockButton onPress={() => history.push('places')}>
        <ChannelList name="すべて" icon="pin" />
      </BlockButton>

      <SubTxt size="s" weight="bold" className="u-mt16">
        Folders
      </SubTxt>
      {channels.map((channel: Channel) => (
        <BlockButton
          key={channel.id}
          onPress={() => history.push(`/channels/${channel.id}`)}
          className="u-mt8"
        >
          <ChannelList name={channel.name} icon={channel.icon} />
        </BlockButton>
      ))}
    </Section>
  )
}
