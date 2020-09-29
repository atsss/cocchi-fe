import React from 'react'
import { Place } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'

interface Props {
  places: Place[]
}

export const PlaceLists: React.FC<Props> = ({ places }) => (
  <Section>
    <p>{places[0].image}</p>
  </Section>
)
