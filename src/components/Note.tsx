import React from 'react'
import { INote } from "../types"

export const Note: React.FC<{note: INote}> = ({note}) => {
  return (
    <li className="list-group-item note">
      <strong className="note__ttl">{ note.title }</strong>

      <small className="note__sub-ttl text-secondary">{ (new Date()).toLocaleDateString() }</small>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
      >&times;</button>
    </li>
  )
}
