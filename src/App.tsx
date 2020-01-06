import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alert, Navbar } from "./components"
import { AlertState } from "./context/alert"
import { About, Home } from "./pages"

const App: React.FC = () => {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert />

          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/about'} exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  )
}

export default App
