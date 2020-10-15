import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import TodosPage from "./pages/TodosPage"

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={TodosPage} path="/todos" />
          <Route component={AboutPage} path="/" />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App
