import React from "react"
import {Item} from "components/item"
import * as styles from "./styles.module.css"
import {STATUS_INFO} from "lib/status"
import {TEST_DATA} from "lib/test-data"

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
        {TEST_DATA.filter((task) => task.status === status).map(
          ({title, description, status}, index) => (
            <Item
              key={index}
              title={title}
              description={description}
              status={status}
            />
          )
        )}
      </div>
    </div>
  )
}

//clsx(styles.progress, styles[color])
