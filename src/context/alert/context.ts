import { createContext } from "react"
import { IContext } from "../../types"

export const AlertContext = createContext<IContext>({
  show: (_, _2) => undefined,
  hide: () => undefined,
  alert: {}
})