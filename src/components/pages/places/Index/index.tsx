import React from 'react'
import { PlacesIndexTemplate as Template } from '../../../templates/places/Index'
import { channels, places } from '../../../../config/data'

export const PlacesIndex: React.FC = () => {
  const initialValue = 0
  const numOfPlaces = channels.reduce(
    (sum, element) => sum + element.numOfPlaces,
    initialValue
  )
  const allChannel = { id: 0, name: 'すべて', icon: 'all', numOfPlaces }

  return <Template channel={allChannel} places={places} />
}
