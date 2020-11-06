import React from 'react'
import { PlacesNewTemplate as Template } from '../../../templates/places/New'
import { places } from '../../../../config/data'

export const PlacesNew: React.FC = () => <Template place={places} />
