import React, { Component } from "react"
import withStyles from "../../hocs/withStyles/withStyles"
import withStyles from "../../hocs/withSpacings/withSpacings"
import propTypes from "prop-types"
import { compose } from "redux"

export class Text extends Component {
  render() {
    const { style, className } = this.props

    const TextElement = props.tagName
    return (
      <TextElement style={style} className={className}>
        {props.children}
      </TextElement>
    )
  }
}

Text.propTypes = {
  tagName: propTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"])
    .isRequired,
  className: propTypes.string,
  style: propTypes.string,
  children: propTypes.node,
}

export default compose(withStyles, withSpacing)(Text)
