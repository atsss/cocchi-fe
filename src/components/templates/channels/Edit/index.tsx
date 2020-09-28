import React from 'react'
import { Channel } from '../../../../interfaces'
import { EditHeader } from '../../../organisms/headers/EditHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  channel: Channel
}

export const ChannelsEditTemplate: React.FC<Props> = ({ channel }) => (
  <>
    <EditHeader backPath={`/channels/${channel.id}`}>フォルダー変更</EditHeader>
    <Nav />
  </>
)
