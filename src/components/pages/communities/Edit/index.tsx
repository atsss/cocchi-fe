import React from 'react'
import { useParams } from 'react-router-dom'
import { CommunitiesEditTemplate as Template } from '../../../templates/communities/Edit'
import { communities } from '../../../../config/data'

export const CommunitiesEdit = () => {
  const { id } = useParams()
  const community = communities.find(
    (element) => element.id === parseInt(id, 10)
  )

  if (!community) return <p>error</p>
  return <Template community={community} />
}
