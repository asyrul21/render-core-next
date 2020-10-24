// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import hoc
import withClickableProps from "hocs/withClickableProps/withClickableProps"

// import style
import styles from "./doubleArrow.module.scss"

export const DoubleArrow = props => {
  const { direction, className } = props

  // define container classes here
  const styleClasses = classnames({
    [styles.doubleArrowContainer]: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      {/* whatever you need to do here */}
      {/* avoid using style tags */}
      <div className={
        classnames(styles.heroArrowBox1, 
          direction === "up" ? styles.arrowUp : styles.arrowDown)}/>
      <div className={
        classnames(styles.heroArrowBox2, 
        direction === "up" ? styles.arrowUp : styles.arrowDown)}/>
    </div>
  )
}

/* Prop Definition */
DoubleArrow.propTypes = {
  /*
   *
   * the text within the button */
  direction: propTypes.oneOf(["up", "down"]),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

// export default withClickableProps(DoubleArrow)
export default DoubleArrow
