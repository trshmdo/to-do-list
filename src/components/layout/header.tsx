import React from "react"
import * as styles from "./styles.module.css"

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>MyTurn</h1>
        <span>a simple to-do-list</span>
      </div>
      <input
        type="text"
        placeholder="search ur tasks..."
        className={styles.search}
      />
    </header>
  )
}
