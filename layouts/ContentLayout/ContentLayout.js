import React from "react"
import propTypes from "prop-types"
import BaseLayout from "../BaseLayout"

const ContentLayout = props => {
  const { nav } = props

  return (
    <BaseLayout nav={nav}>
      <div>{props.children}</div>
    </BaseLayout>
  )
}

ContentLayout.propTypes = {
  nav: propTypes.bool
}

ContentLayout.defaultProps = {
  nav: true,
}

export default ContentLayout
