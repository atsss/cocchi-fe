import React from 'react'
import { Place } from '../../../../interfaces'
import { Img } from '../../../atoms/Img'
import { Section } from '../../../atoms/Section'

interface Props {
  places: Place[]
}

export const PlaceLists: React.FC<Props> = ({ places }) => (
  <Section>
    <Img size="m" src={places[0].image} />
  </Section>
)
