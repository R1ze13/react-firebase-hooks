export enum AlertType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark'
}

export type TShow = (text: string, type?: AlertType) => void
export type THide = () => void

export interface IContext {
  show: TShow
  hide: THide
  alert: IState
}

export interface IAction {
  type: string
  payload?: IState
}

export interface IState {
  text?: string
  type?: AlertType
  isClosable?: boolean
  visible?: boolean
}
