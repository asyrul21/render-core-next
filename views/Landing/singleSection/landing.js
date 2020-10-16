import React, { Fragment } from "react"

// import component
import Hero from "components/heros/landing/hero"

// import style
import "./landing.scss"

const Landing = () => {
  return (
    <Fragment>
      <Hero layout="doubleColumn" />
    </Fragment>
  )
}

export default Landing
