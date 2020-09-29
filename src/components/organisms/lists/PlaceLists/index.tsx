import React from 'react'
import { Place } from '../../../../interfaces'
import { Img } from '../../../atoms/Img'
import { Section } from '../../../atoms/Section'

interface Props {
  places: Place[]
}

export const PlaceLists: React.FC<Props> = ({ places }) => (
  <Section>
    {places.map((element: Place) => (
      <Img size="m" src={element.image} />
    ))}
  </Section>
)
