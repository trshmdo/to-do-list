import React from "react"
import * as styles from "./styles.module.css"

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <h1>MyTurn</h1>
      <span>a simple to-do-list</span>
    </header>
  )
}
