import React from 'react'
import { EditHeader } from '../../../organisms/headers/EditHeader'
import { Nav } from '../../../organisms/Nav'

export const NotesNewTemplate: React.FC = () => (
  <>
    <EditHeader backPath="/places/1">新規コメント</EditHeader>
    <Nav />
  </>
)
