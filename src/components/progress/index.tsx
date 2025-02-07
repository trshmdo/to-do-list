import * as styles from "./styles.module.css"
import Item from "../item/index"
import AddItem from "../addItem/index"

function Column({name, color}: {name: string; color: string}) {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <span className={styles[color]}></span>
        <p>{name}</p>
      </div>
      <div className={styles.tasks}>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default function MainSection() {
  return (
    <div className={styles.wrapper}>
      <Column name="To Start" color="circleRed" />
      <Column name="In Progress" color="circleGreen" />
      <Column name="Completed" color="circleYellow" />
    </div>
  )
}
