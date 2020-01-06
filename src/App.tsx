import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alert, Navbar } from "./components"
import { About, Home } from "./pages"
import { IAlert } from "./types"

const App: React.FC = () => {
  const alertOptions: IAlert = {
    text: 'Текст для алерта',
    isClosable: true
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert alert={alertOptions} />

        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} exact component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
