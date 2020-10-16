// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import Card from "./card/card"

// import style
import styles from "./infoCards.module.scss"

export const InfoCards = props => {
  const { data, className } = props

  // define container classes here
  const styleClasses = classnames({
    [styles.infoCardsContainer]: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      { data.map((item, idx) => {
          return (
            <Card key={idx} {...item}/>
          )
      })}
    </div>
  )
}

/* Prop Definition */
InfoCards.propTypes = {
  /*
   *
   * the data to be rendered as info cards */
  data: propTypes.arrayOf(propTypes.shape({
      icon: propTypes.shape({
        path: propTypes.string,
        path_WEBP: propTypes.string,
        path_JPEG2000: propTypes.string,
      }),
      heading: propTypes.string,
      text: propTypes.string
  })),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default InfoCards
