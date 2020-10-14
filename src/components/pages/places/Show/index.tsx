import React from 'react'
import { PlacesShowTemplate as Template } from '../../../templates/places/Show'
import { channels, places } from '../../../../config/data'

export const PlacesShow: React.FC = () => {
  const initialValue = 0
  const numOfPlaces = channels.reduce(
    (sum, element) => sum + element.numOfPlaces,
    initialValue
  )
  const allChannel = { id: 0, name: 'すべて', icon: 'all', numOfPlaces }

  return <Template channel={allChannel} places={places} />
}
