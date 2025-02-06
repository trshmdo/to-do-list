import React from "react"
import {createRoot} from "react-dom/client"
import Header from "./components/header/index"
import Search from "./components/search/index"
import Item from "./components/item/index"
import AddItem from "./components/addItem/index"
import * as styles from "./styles.module.css"

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Item />
      <AddItem />
    </>
  )
}

const rootElement = document.getElementById("root") as Element
const root = createRoot(rootElement)

root.render(<App />)
