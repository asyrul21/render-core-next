// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import other components component
// hocs
import withStyles from "hocs/withStyles/withStyles"

// import style
import "./caption.scss"

export const Caption = props => {
  const { text, className } = props

  // define container classes here
  const styleClasses = classnames({
    captionContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      <p>{text}</p>
    </div>
  )
}

/* Prop Definition */
Caption.propTypes = {
  /*
   *
   * the text within the caption */
  text: propTypes.string,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default withStyles(Caption)
