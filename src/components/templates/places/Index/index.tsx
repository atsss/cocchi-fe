import React from 'react'
import { Place } from '../../../../interfaces'
import { PlaceLists } from '../../../organisms/lists/PlaceLists'
import { Nav } from '../../../organisms/Nav'

interface Props {
  places: Place[]
}

export const PlacesIndexTemplate: React.FC<Props> = ({ places }) => (
  <>
    <PlaceLists places={places} />
    <Nav />
  </>
)
