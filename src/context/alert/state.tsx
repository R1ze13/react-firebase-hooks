import React, { ReactNode, useReducer } from "react"
import { IState, THide, TShow } from "../../types"
import { HIDE_ALERT, SHOW_ALERT } from "../actionTypes"
import { AlertContext, alertReducer } from "./"

export const AlertState: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(alertReducer, {visible: false})

  const show: TShow = (text, type) => {
    const payload: IState = {
      text
    }

    if (type) {
      payload.type = type
    }

    dispatch({
      type: SHOW_ALERT,
      payload
    })
  }

  const hide: THide = () => dispatch({
    type: HIDE_ALERT
  })

  return (
    <AlertContext.Provider value={{
      show, hide, alert: state
    }}>
      {children}
    </AlertContext.Provider>
  )
}
