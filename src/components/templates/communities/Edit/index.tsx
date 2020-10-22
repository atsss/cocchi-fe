import React, { useState } from 'react'
import { Community } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'
import { TextField } from '../../../molecules/inputs/TextField'
import { EditHeader } from '../../../organisms/headers/EditHeader'

interface Props {
  community: Community
}

export const CommunitiesEditTemplate: React.FC<Props> = ({ community }) => {
  const [name, setName] = useState(community.name)

  return (
    <>
      <EditHeader backPath={`/communities/${community.id}/channels`}>
        グループ変更
      </EditHeader>
      <Section>
        <TextField
          label="名前"
          onChange={setName}
          value={name}
          placeholder="山田太郎"
        />
        <p>{name}</p>
      </Section>
    </>
  )
}
