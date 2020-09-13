import React from 'react'
import { User, Community } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'
import { CommunityList } from '../../../molecules/lists/CommunityList'
import { CommunityHeader } from '../../../organisms/headers/CommunityHeader'
import { Nav } from '../../../organisms/Nav'

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
      {communities.map((community: Community, index: number) => (
        <CommunityList
          key={community.id}
          id={community.id}
          name={community.name}
          image={community.image}
          members={community.members}
          numOfFolders={community.numOfFolders}
          className={index === 0 ? '' : 'u-mt24'}
        />
      ))}
    </Section>
    <Nav />
  </>
)
