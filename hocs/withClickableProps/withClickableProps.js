// doesnt work
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

const withClickableProps = ComposedComponent => {
  class ClickableWrapper extends Component {
    handleClick = (event, callback) => {
        // event.preventDefault()
        console.log("Calling callback!");
        // callback(event)
    }
    
    render() {
      const {
        onClick,
        ...rest
      } = this.props

      console.log("Called HOC");
      console.log("OnClick method:", onClick);
      return <ComposedComponent {...rest} 
                onClick={this.handleClick}/>
    }
  }

  ClickableWrapper.propTypes = withClickableProps.propTypes

  return ClickableWrapper
}

withClickableProps.propTypes = {
  ComposedComponent: propTypes.object,

  // clickable component
  onClick: propTypes.func,
}

export default withClickableProps
