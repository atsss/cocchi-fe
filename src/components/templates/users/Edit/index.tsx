import React, { useState } from 'react'
import { User } from '../../../../interfaces'
import { Section } from '../../../atoms/Section'
import { TextField } from '../../../molecules/inputs/TextField'
import { EditHeader } from '../../../organisms/headers/EditHeader'

interface Props {
  user: User
}

export const UsersEditTemplate: React.FC<Props> = ({ user }) => {
  const [name, setName] = useState(user.name)

  return (
    <>
      <EditHeader backPath="/">プロフィール変更</EditHeader>
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
