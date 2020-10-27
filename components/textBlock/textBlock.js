import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

import styles from "./textBlock.module.scss"

// this component must be wrapped with a container to determine its size
const TextBlock = props => {
  const { 
    heading, 
    paragraphs, 
    headingClassname, 
    paragraphClassname,
    className } = props

    // define container classes here
    const containerStyleClasses = classnames({
      [styles.textBlockContainer]: true,
      [`${className}`]: className,
    })

    const headingClassnames = classnames({
      [styles.textBlockHeading]: true,
      [`${headingClassname}`]: headingClassname,
    })

    const paragraphClassnames = classnames({
      [styles.textBlockParagraph]: true,
      [`${paragraphClassname}`]: paragraphClassname,
    })

  return (
    <div className={containerStyleClasses}>
      <h4 className={headingClassnames}>{heading}</h4>
      {paragraphs &&
        paragraphs.map((paragraph, idx) => {
          return (
            <p key={idx} className={paragraphClassnames}>
              {paragraph}
            </p>
          )
        })}
    </div>
  )
}

/* Prop Definition */
TextBlock.propTypes = {
  /*
   *
   * the text as the heading */
  heading: propTypes.string,
  /*
   *
   * the paragraphs */
  paragraphs: propTypes.arrayOf(propTypes.string),
  /*
   *
   * classname to be applied to the header */
  headingClassname: propTypes.string,
  /*
   *
   * classname to be applied to the paragraphs */
  paragraphClassname: propTypes.string,
  /*
   *
   * classname to be applied to the container */
  className: propTypes.string,
}

export default TextBlock
