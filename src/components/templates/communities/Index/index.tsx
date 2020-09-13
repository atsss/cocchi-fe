import React from 'react'
import { User, Community } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'
import { Img } from '../../../atoms/Img'

interface Props {
  user: User
  communities: Community[]
}

export const CommunitiesIndexTemplate: React.FC<Props> = ({
  user,
  communities,
}) => (
  <>
    <Section>
      <Img src={user.image} border="radius" />
    </Section>
    <Section>
      {communities.map((community: Community) => (
        <Img key={community.id} src={community.image} border="radius" />
      ))}
    </Section>
  </>
)
