import React from 'react'
import { useParams } from 'react-router-dom'
import { ChannelsIndexTemplate as Template } from '../../../templates/channels/Index'
import { communities, channels } from '../../../../config/data'

export const ChannelsIndex = () => {
  const { id } = useParams()
  const community = communities.find(
    (element) => element.id === parseInt(id, 10)
  )

  if (!community) return <p>error</p>
  return <Template community={community} channels={channels} />
}
