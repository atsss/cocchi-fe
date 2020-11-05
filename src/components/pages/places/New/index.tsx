import React from 'react'
import { PlacesNewTemplate as Template } from '../../../templates/places/New'
// import { places } from '../../../../config/data'

export const PlacesNew: React.FC = () => {
  const places = {
    id: 0,
    name: 'starbacks',
    image: 'https://cocchi-sample.s3-us-west-2.amazonaws.com/community3.jpg',
    visit: '行った',
  }

  return <Template place={places} />
}
