import React, { ReactNode } from "react"
import { FirebaseContext } from "./"

export const state: React.FC<{children: ReactNode}> = ({children}) => {

  return (
    <FirebaseContext.Provider>
      { children }
    </FirebaseContext.Provider>
  )
}
