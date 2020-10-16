import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

import "./withStyles.module.scss"

// usage the style tag is a big RED FLAG NO.
// because style tags overwrites the classes which makes
// this approach almost unusable
// future solution: define multiple classes in scss
// use classes only. Not style tag

const withStyles = ComposedComponent => {
  class GenericStylesWrapper extends Component {
    render() {
      const {
        fontColor,
        fontWeight,
        fontStyle,
        fontSize,
        lineHeight,
        backgroundColor,
        borderRadius,
        className,
        ...rest
      } = this.props

      const styleClasses = classnames({
        [`${className}`]: className,
        [`fontColor-${fontColor}`]: fontColor,
        [`fontWeight-${fontWeight}`]: fontWeight,
        [`fontStyle-${fontStyle}`]: fontStyle,
        [`backgroundColor-${backgroundColor}`]: backgroundColor,
      })

      return <ComposedComponent {...rest} className={styleClasses} />
    }
  }

  GenericStylesWrapper.propTypes = withStyles.propTypes

  return GenericStylesWrapper
}

withStyles.propTypes = {
  ComposedComponent: propTypes.object,
  fontColor: propTypes.oneOf([
    "dark",
    "grey",
    "mid-grey",
    "light-grey",
    "white",
    "inherit",
    "primary",
    "link-blue",
    "navy-blue",
    "red",
    "orange",
    "green",
    "yellow",
    "purple",
  ]),

  fontWeight: propTypes.oneOf([
    "light",
    "regular",
    "medium",
    "semiBold",
    "bold",
  ]),

  fontStyle: propTypes.oneOf(["normal", "italic"]),

  backgroundColor: propTypes.oneOf([
    "dark",
    "grey",
    "mid-grey",
    "light-grey",
    "white",
    "inherit",
    "primary",
    "link-blue",
    "navy-blue",
    "red",
    "orange",
    "green",
    "yellow",
    "purple",
  ]),

  // className
  className: propTypes.string,
}

export default withStyles
