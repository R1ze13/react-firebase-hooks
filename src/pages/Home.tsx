import React, { Fragment } from "react"
import { Form, Notes } from "../components"
import { INote } from "../types"

export const Home: React.FC = () => {
  const notes: Array<INote> = (new Array(3))
    .fill('')
    .map((_, i) => ({id: i, title: `Note with id: ${i + 1}`}))

  return (
    <Fragment>
      <Form />

      <hr/>

      <Notes notes={notes} />
    </Fragment>
  )
}
