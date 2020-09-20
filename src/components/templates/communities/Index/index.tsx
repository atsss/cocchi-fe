import React from 'react'
import { useHistory } from 'react-router-dom'
import { User, Community } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'
import { BlockButton } from '../../../atoms/Button'
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
}) => {
  const history = useHistory()

  return (
    <>
      <CommunityHeader user={user} />
      <Section>
        {communities.map((community: Community, index: number) => (
          <BlockButton
            onPress={() => history.push(`communities/${community.id}/channels`)}
            className={index === 0 ? '' : 'u-mt16'}
          >
            <CommunityList
              key={community.id}
              id={community.id}
              name={community.name}
              image={community.image}
              members={community.members}
              numOfFolders={community.numOfFolders}
            />
          </BlockButton>
        ))}
      </Section>
      <Nav />
    </>
  )
}
