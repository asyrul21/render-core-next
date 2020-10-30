import React from "react"
import classnames from "classnames"
import propTypes from "prop-types"

import styles from "./ContentDoubleColumn.module.scss"

const ContentDoubleColumn = React.forwardRef((props, ref) => {
  const { className, children } = props; 
  const styleClasses = classnames({
    [`${className}`]: className,
    [styles.contentDoubleColumnContainer]: true,
  })

  return <div ref={ref} className={styleClasses}>{children}</div>

})

/* Prop Definition */
ContentDoubleColumn.propTypes = {
  /*
   *
   * any applied classnames */
  className: propTypes.string,
  /*
   *
   * children of component */
  children: propTypes.node.isRequired,
}

export default ContentDoubleColumn
