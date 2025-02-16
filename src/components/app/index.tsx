import React from "react"
import {StatusColumn} from "components/status-column"
import {Layout} from "components/layout"
import "styles/global.css"

export const App: React.FC = () => {
  return (
    <Layout>
      <StatusColumn status="to-start" />
      <StatusColumn status="in-progress" />
      <StatusColumn status="completed" />
    </Layout>
  )
}
