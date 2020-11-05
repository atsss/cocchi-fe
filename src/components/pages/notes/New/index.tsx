import React from 'react'
import { NotesNewTemplate as Template } from '../../../templates/notes/New'
// import { places } from '../../../../config/data'

export const NotesNew: React.FC = () => {
  const notes = {
    id: 0,
    name: 'starbacks',
    image: 'https://cocchi-sample.s3-us-west-2.amazonaws.com/community3.jpg',
    comment: '美味しい',
  }

  return <Template note={notes} />
}
