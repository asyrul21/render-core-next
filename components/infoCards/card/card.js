// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import components
import Image from "containers/Image/Image"

// import style
import styles from "./card.module.scss"

export const Card = props => {
  const { icon, heading, text, className } = props

  // define container classes here
  const styleClasses = classnames({
    [styles.cardContainer]: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
        {/* whatever you need to do here */}
        {/* avoid using style tags */}
        <div className={styles.Card_image}>
            <Image {...icon}/>
        </div>
        <p className={styles.card_heading}>{heading}</p>
        <p className={styles.card_paragraph}>{text}</p>
    </div>
  )
}

/* Prop Definition */
Card.propTypes = {
    /*
    *
    * the icon or image of the card */
    icon: propTypes.shape({
        path: propTypes.string,
        path_WEBP: propTypes.string,
        path_JPEG2000: propTypes.string,
    }),
    /*
    *
    * the heading of the card */
    heading: propTypes.string,
    /*
    *
    * the text of the card */
    text: propTypes.string,
    /*
    *
    * any applied classnames */
    className: propTypes.string,
}

export default Card
