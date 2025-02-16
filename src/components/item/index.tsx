import React from "react"
import * as styles from "./styles.module.css"

interface ItemProps {
  title: string
  description: string
  status: "to-start" | "in-progress" | "completed"
}

export const Item: React.FC<ItemProps> = ({title, description}) => {
  return (
    <div className={styles.container}>
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </div>
  )
}
