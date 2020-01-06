import React from 'react'
import { INote } from "../types"
import { Note } from "./"

export const Notes: React.FC<{notes: Array<INote>}> = ({notes}) => {
  return (
    <ul className="list-group">
      {notes.map(note => <Note note={note} key={note.id} />)}
    </ul>
  )
}
