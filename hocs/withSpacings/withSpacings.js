import React, { Component } from "react"
import PropTypes from "prop-types"

// usage the style tag is a big RED FLAG NO.
// because style tags overwrites the classes which makes
// this approach almost unusable
// future solution: define multiple classes in scss
// use classes only. Not style tag

const withSpacings = ComposedComponent => {
  class SpacingsWrapper extends Component {
    getPaddingValue = () => {
      let top = 0
      let bottom = 0
      let left = 0
      let right = 0

      if (this.props.paddingAll) {
        top = `${this.getPixelValue(this.props.paddingAll)}`
        bottom = `${this.getPixelValue(this.props.paddingAll)}`
        left = `${this.getPixelValue(this.props.paddingAll)}`
        right = `${this.getPixelValue(this.props.paddingAll)}`
      }

      if (this.props.paddingHorizontal) {
        left = `${this.getPixelValue(this.props.paddingHorizontal)}`
        right = `${this.getPixelValue(this.props.paddingHorizontal)}`
      }

      if (this.props.paddingVertical) {
        top = `${this.getPixelValue(this.props.paddingVertical)}`
        bottom = `${this.getPixelValue(this.props.paddingVertical)}`
      }

      if (this.props.paddingTop) {
        top = `${this.getPixelValue(this.props.paddingTop)}`
      }

      if (this.props.paddingBottom) {
        bottom = `${this.getPixelValue(this.props.paddingBottom)}`
      }

      if (this.props.paddingLeft) {
        left = `${this.getPixelValue(this.props.paddingLeft)}`
      }

      if (this.props.paddingRight) {
        right = `${this.getPixelValue(this.props.paddingRight)}`
      }

      return `${top} ${bottom} ${right} ${left}`
    }

    getMarginValue = () => {
      let top = 0
      let bottom = 0
      let left = 0
      let right = 0

      if (this.props.marginCenter) {
        return "0 auto"
      }

      if (this.props.marginAll) {
        top = `${this.getPixelValue(this.props.marginAll)}`
        bottom = `${this.getPixelValue(this.props.marginAll)}`
        left = `${this.getPixelValue(this.props.marginAll)}`
        right = `${this.getPixelValue(this.props.marginAll)}`
      }

      if (this.props.marginHorizontal) {
        left = `${this.getPixelValue(this.props.marginHorizontal)}`
        right = `${this.getPixelValue(this.props.marginHorizontal)}`
      }

      if (this.props.marginVertical) {
        top = `${this.getPixelValue(this.props.marginVertical)}`
        bottom = `${this.getPixelValue(this.props.marginVertical)}`
      }

      if (this.props.marginTop) {
        top = `${this.getPixelValue(this.props.marginTop)}`
      }

      if (this.props.marginBottom) {
        bottom = `${this.getPixelValue(this.props.marginBottom)}`
      }

      if (this.props.marginLeft) {
        left = `${this.getPixelValue(this.props.marginLeft)}`
      }

      if (this.props.marginRight) {
        right = `${this.getPixelValue(this.props.marginRight)}`
      }

      return `${top} ${bottom} ${right} ${left}`
    }

    getPixelValue = prop => {
      return `${prop}px`
    }

    render() {
      const { ...rest } = this.props

      const style = {
        ...this.props.style,
        padding: this.getPaddingValue(),
        margin: this.getMarginValue(),
      }

      return (
        <ComposedComponent
          {...rest}
          style={style}
          className={this.props.className}
        >
          {this.props.children}
        </ComposedComponent>
      )
    }
  }

  SpacingsWrapper.propTypes = withSpacings.PropTypes

  return SpacingsWrapper
}

withSpacings.propTypes = {
  ComposedComponent: PropTypes.object,
  // padding
  padingHorizontal: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingAll: PropTypes.number,

  // margins
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginAll: PropTypes.number,
  // margin 0 auto
  marginCenter: PropTypes.bool,

  // className
  className: PropTypes.string,

  // children
  children: PropTypes.node,
}

export default withSpacings
