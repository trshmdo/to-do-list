import React from "react"
import {createRoot} from "react-dom/client"
import Header from "./components/header/index"
import * as styles from "./styles.module.css"

const App = () => {
  return (
    <>
      <Header />
    </>
  )
}

const rootElement = document.getElementById("root") as Element
const root = createRoot(rootElement)

root.render(<App />)
