import React, { useContext } from "react"
import { AlertContext } from "../context/alert"
import { AlertType, IContext, IState } from "../types"

const defaults: IState = {
  text: '',
  type: AlertType.Warning,
  isClosable: true,
  visible: false
}

export const Alert: React.FC = () => {
  const {alert, hide} = useContext<IContext>(AlertContext)

  const params = {
    ...defaults,
    ...alert
  }

  console.log(params, alert)

  if (!alert.visible) {
    return null
  }

  return (
    <div
      className={`alert alert-${params.type} ${params.isClosable ? 'alert-dismissible' : ''}`}
      role="alert"
    >
      <strong>Attention!</strong> { params.text }
      {
        params.isClosable &&
          <button
            onClick={hide}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
      }
    </div>
  )
}
