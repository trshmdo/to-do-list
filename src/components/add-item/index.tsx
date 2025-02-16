import React from "react"
import * as styles from "./styles.module.css"

export const AddItem: React.FC = () => {
  return (
    <div className={styles.container}>
      <form>
        <input name="Title" placeholder="Title" className={styles.title} />
        <textarea
          name="Description"
          placeholder="Description"
          className={styles.description}
        />
        <button>Add Task</button>
      </form>
    </div>
  )
}
