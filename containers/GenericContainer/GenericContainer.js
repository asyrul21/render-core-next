import React, { Component } from "react"
import { compose } from "redux"
import propTypes from "prop-types"
import withSpacing from "hocs/withSpacings/withSpacings"
import withStyles from "hocs/withStyles/withStyles"
import classnames from "classnames"

import "./GenericContainer.module.scss"

export class GenericContainer extends Component {
  render() {
    const {
      width,
      widthAuto,
      minWidth,
      height,
      heightAuto,
      minHeight,
      display,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      textAlign,
      borderAll,
      className,
      children,
    } = this.props

    const styleClasses = classnames({
      GenericContainer: true,
      [`${className}`]: className,
    })

    const style = this.props.style ? this.props.style : {}

    const enhancedStyle = {
      ...style,
      width: widthAuto ? "auto" : `${width}`,
      minWidth,
      height: heightAuto ? "auto" : `${height}`,
      minHeight,
      display,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      textAlign,
      border: borderAll,
    }

    return (
      <div className={styleClasses} style={enhancedStyle}>
        {children}
      </div>
    )
  }
}

GenericContainer.propTypes = {
  // width auto
  widthAuto: propTypes.bool,
  width: propTypes.string,
  minWidth: propTypes.string,

  // height auto
  heightAuto: propTypes.bool,
  height: propTypes.string,
  minHeight: propTypes.string,

  display: propTypes.string,

  // flex
  flexDirection: propTypes.oneOf(["row", "column"]),
  flexWrap: propTypes.oneOf(["wrap", "nowrap"]),
  justifyContent: propTypes.oneOf([
    "space-around",
    "space-between",
    "flex-start",
    "flex-end",
    "center",
  ]),
  alignItems: propTypes.oneOf(["center", "flex-end", "flex-start"]),
  textAlign: propTypes.oneOf(["left", "center", "right", "inherit"]),

  // borders
  borderAll: propTypes.string,

  className: propTypes.string,
  children: propTypes.node,
}

export default compose(withStyles, withSpacing)(GenericContainer)
