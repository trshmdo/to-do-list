import React from "react"
import {Header} from "./header"
import {Counter} from "components/counter"
import * as styles from "./styles.module.css"

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Counter />
    </>
  )
}
