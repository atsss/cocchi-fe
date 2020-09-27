import React from 'react'
import { useParams } from 'react-router-dom'
import { ChannelsShowTemplate as Template } from '../../../templates/channels/Show'
import { channels } from '../../../../config/data'

export const ChannelsShow: React.FC = () => {
  const { channelId } = useParams()
  const channel = channels.find(
    (element) => element.id === parseInt(channelId, 10)
  )

  if (!channel) return <p>error</p>
  return <Template channel={channel} channels={channels} />
}
