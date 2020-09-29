import React from 'react'
import { useParams } from 'react-router-dom'
import { ChannelsShowTemplate as Template } from '../../../templates/channels/Show'
import { channels, places } from '../../../../config/data'

export const ChannelsShow: React.FC = () => {
  const { id } = useParams()
  const channel = channels.find((element) => element.id === parseInt(id, 10))

  if (!channel) return <p>error</p>
  return <Template channel={channel} places={places} />
}
