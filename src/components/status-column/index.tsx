import React from "react"
import {Item} from "components/item"
import * as styles from "./styles.module.css"
import {STATUS_INFO} from "lib/status"

interface StatusColumnProps {
  status: "to-start" | "in-progress" | "completed"
}

export const StatusColumn: React.FC<StatusColumnProps> = ({status}) => {
  const {name, color} = STATUS_INFO[status]

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <span className={styles.circle} style={{backgroundColor: color}} />
        <p>{name}</p>
      </div>
      <div className={styles.tasks}>
        <Item
          title="Title of the Task"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamobcaecati ipsum sit blanditiis dolorem labore, nesciunt"
          status={status}
        />
        <Item
          title="Title of the Task"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamobcaecati ipsum sit blanditiis dolorem labore, nesciunt"
          status={status}
        />
        <Item
          title="Title of the Task"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniamobcaecati ipsum sit blanditiis dolorem labore, nesciunt"
          status={status}
        />
      </div>
    </div>
  )
}

//clsx(styles.progress, styles[color])
