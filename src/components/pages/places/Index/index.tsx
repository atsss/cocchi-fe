import React from 'react'
import { useParams } from 'react-router-dom'
import { PlacesIndexTemplate as Template } from '../../../templates/places/Index'
import { places } from '../../../../config/data'

export const PlacesIndex: React.FC = () => {
  const { id } = useParams()
  const place = places.find((element) => element.id === parseInt(id, 10))

  if (!place) return <p>error</p>
  return <Template places={places} />
}
