import React from "react"
import { AlertType, IAlert } from "../types"

const defaults: IAlert = {
  text: '',
  type: AlertType.Success,
  isClosable: false
}

export const Alert = ({alert}: {alert: IAlert}) => {
  const params = {
    ...defaults,
    ...alert
  }

  return (
    <div
      className={`alert alert-${params.type} ${params.isClosable ? 'alert-dismissible' : ''}`}
      role="alert"
    >
      <strong>Attention!</strong> { params.text }
      {
        params.isClosable &&
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      }
    </div>
  )
}
