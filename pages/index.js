import React from "react"
// import Layout from "../layouts/BaseLayout"
import ContentLayout from "../layouts/ContentLayout/ContentLayout"

// import view
// choose which views you want
// import Landing from "../views/Landing/singleSection/landing"
import Landing from "../views/Landing/multiSection/landing"

const IndexPage = () => {
  return (
    <ContentLayout>
      <Landing />
    </ContentLayout>
  )
}

export default IndexPage
