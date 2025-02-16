import React from "react"
import * as styles from "./styles.module.css"
import {STATUS_INFO} from "lib/status"

interface ItemProps {
  title: string
  description: string
  status: "to-start" | "in-progress" | "completed"
}

export const Item: React.FC<ItemProps> = ({title, description, status}) => {
  const {color} = STATUS_INFO[status]

  return (
    <div className={styles.container}>
      <article>
        <h3>
          <span className={styles.circle} style={{backgroundColor: color}} />
          <span>{title}</span>
        </h3>
        <p>{description}</p>
      </article>
    </div>
  )
}
