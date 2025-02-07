import * as styles from "./styles.module.css"

export default function Search() {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Search" />
        <button disabled>Поиск</button>
      </form>
    </div>
  )
}
