import React from 'react'
import { useParams } from 'react-router-dom'
import { NotesEditTemplate as Template } from '../../../templates/notes/Edit'
import { notes } from '../../../../config/data'

export const NotesEdit: React.FC = () => {
  const { id } = useParams()
  const note = notes.find((element) => element.id === parseInt(id, 10))

  if (!note) return <p>error</p>
  return <Template note={note} />
}
