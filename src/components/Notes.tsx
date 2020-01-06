import React from 'react'
import { INote } from "../types"
import { Note } from "./"

export const Notes = ({notes}: {notes: Array<INote>}) => {
  return (
    <ul className="list-group">
      {notes.map(note => <Note note={note} key={note.id} />)}
    </ul>
  )
}
