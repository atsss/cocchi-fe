import React from 'react'
import { useParams } from 'react-router-dom'
import { PlacesNewTemplate as Template } from '../../../templates/places/New'
import { places } from '../../../../config/data'

export const PlacesNew: React.FC = () => {
  const { id } = useParams()
  const place = places.find((element) => element.id === parseInt(id, 10))

  if (!place) return <p>error</p>
  return <Template place={place} />
}
