import React from "react"

import "./textBlock.module.scss"

// this component must be wrapped with a container to determine its size

const textBlock = props => {
  const { heading, paragraphs } = props

  return (
    <div className="textBlock_container">
      <h4 className="textBlock_heading">{heading}</h4>
      {paragraphs &&
        paragraphs.map((paragraph, idx) => {
          return (
            <p key={idx} className="textBlock_paragraph">
              {paragraph}
            </p>
          )
        })}
    </div>
  )
}

export default textBlock
