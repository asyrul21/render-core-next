import React, { Fragment } from "react"
import propTypes from "prop-types"
import Header from "../components/headers/navbar"
import Footer from "../components/footers/footer"

const BaseLayout = props => {
  const { nav } = props
  return (
    <Fragment>
      { nav &&
        <Header />
      }
      {props.children}
      <Footer />
    </Fragment>
  )
}

BaseLayout.propTypes = {
  nav: propTypes.bool
}

export default BaseLayout
