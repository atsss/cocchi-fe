import React from 'react'
import { User, Community } from '../../../../interfaces'
import { CommunityHeader } from '../../../organisms/headers/CommunityHeader'
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
    <CommunityHeader user={user} />
    <Section>
      {communities.map((community: Community) => (
        <Img key={community.id} src={community.image} border="radius" />
      ))}
    </Section>
  </>
)
