import React from 'react'
import { PlacesIndexTemplate as Template } from '../../../templates/places/Index'
import { channels, places } from '../../../../config/data'

export const PlacesIndex: React.FC = () => (
  <Template channel={channels[0]} places={places} />
)
