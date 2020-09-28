import React from 'react'
import { useParams } from 'react-router-dom'
import { ChannelsEditTemplate as Template } from '../../../templates/channels/Edit'
import { channels } from '../../../../config/data'

export const ChannelsEdit: React.FC = () => {
  const { id } = useParams()
  const channel = channels.find((element) => element.id === parseInt(id, 10))

  if (!channel) return <p>error</p>
  return <Template channel={channel} />
}
