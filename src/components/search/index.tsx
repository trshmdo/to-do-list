import * as styles from "./styles.module.css"

export default function Search() {
  return (
    <>
      <div className={styles.container}>
        <input name="search" placeholder="Search" />
      </div>
    </>
  )
}
