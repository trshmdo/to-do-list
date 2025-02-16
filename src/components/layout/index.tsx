import React from "react"
import {Header} from "./header"
import {Search} from "./search"
import * as styles from "./styles.module.css"

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <Search />
      <div className={styles.wrapper}>{children}</div>
    </>
  )
}
