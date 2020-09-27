import React from 'react'
import { Channel } from '../../../../interfaces'
import { ChannelLists } from '../../../organisms/lists/ChannelLists'
import { EditHeader } from '../../../organisms/headers/EditHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
  channels: Channel[]
}

export const ChannelsEditTemplate: React.FC<Props> = ({ channels }) => (
  <>
    <EditHeader backPath="/">フォルダー変更</EditHeader>
    <ChannelLists channels={channels} />
    <Nav />
  </>
)
