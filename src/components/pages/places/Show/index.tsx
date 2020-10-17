import React from 'react'
import { useParams } from 'react-router-dom'
import { PlacesShowTemplate as Template } from '../../../templates/places/Show'
import { places } from '../../../../config/data'

export const PlacesShow: React.FC = () => {
  const { id } = useParams()
  const place = places.find((element) => element.id === parseInt(id, 10))
  const tmpChannel = { id: 0, name: 'すべて', icon: 'all' }

  if (!place) return <p>error</p>
  return <Template one={tmpChannel} two={place} />
}
