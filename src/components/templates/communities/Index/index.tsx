import React from 'react'
import { User, Community } from '../../../../interfaces'
import { CommunityHeader } from '../../../organisms/headers/CommunityHeader'
import { Section } from '../../../atoms/Section'
import { CommunityList } from '../../../molecules/lists/CommunityList'

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
        <CommunityList
          key={community.id}
          id={community.id}
          name={community.name}
          image={community.image}
          members={community.members}
          numOfFolders={community.numOfFolders}
          className="u-mt32"
        />
      ))}
    </Section>
  </>
)
