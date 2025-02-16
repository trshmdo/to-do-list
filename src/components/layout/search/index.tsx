import React from "react"
import * as styles from "./styles.module.css"

export const Search: React.FC = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Search" />
        <button disabled>Поиск</button>
      </form>
    </div>
  )
}
