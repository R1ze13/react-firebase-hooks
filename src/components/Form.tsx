import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert"
import { AlertType, IContext } from "../types"

export const Form: React.FC = () => {
  const [value, setValue] = useState('')
  const alert = useContext<IContext>(AlertContext)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value.trim()) {

      alert.show('Note was created successfully', AlertType.Success)
      setValue('')
      return
    }

    alert.show('Enter a name for new note')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your note"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
