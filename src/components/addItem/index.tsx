import * as styles from "./styles.module.css"

export default function AddItem() {
  return (
    <>
      <div className={styles.container}>
        <input name="Title" placeholder="Title" className={styles.title} />
        <textarea
          name="Description"
          placeholder="Description"
          className={styles.description}
        />
        <button>Add Task</button>
      </div>
    </>
  )
}
