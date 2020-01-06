import { Reducer } from "react"
import { IAction, IState } from "../../types"
import { HIDE_ALERT, SHOW_ALERT } from "../actionTypes"

interface IHandlers {
  [key: string]: (state: IState, action: IAction) => IState
}

const handlers: IHandlers = {
  [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
  [HIDE_ALERT]: state => ({...state, visible: false}),
  DEFAULT: state => state
}

export const alertReducer: Reducer<IState, IAction> = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
