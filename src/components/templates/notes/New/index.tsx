import React from 'react'
import { Note } from '../../../../interfaces'
import { EditHeader } from '../../../organisms/headers/EditHeader'
import { Nav } from '../../../organisms/Nav'

interface Props {
  note: Note
}

export const NotesNewTemplate: React.FC<Props> = ({ note }) => (
  <>
    <EditHeader backPath={`/notes/${note.id}/edit`}>新規コメント</EditHeader>
    <Nav />
  </>
)
