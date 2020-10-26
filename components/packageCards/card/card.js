// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import components
import Image from "containers/Image/Image"

// import style
import styles from "./card.module.scss"

export const Card = props => {
  const { icon, heading, subHeading, price, onClick, className } = props

  // define container classes here
  const styleClasses = classnames({
    [styles.cardContainer]: true,
    [`${className}`]: className,
  })

  const handleClick = (e, cb) => {
    e.preventDefault()
    cb(e)
  }

  return (
    <div className={styleClasses} onClick={(e) => {handleClick(e, onClick)}}>
        <div className={styles.cardBackground}>
            <Image {...icon}/>
        </div>
        <div className={styles.cardTextContainer}>
            <p className={styles.card_heading}>{heading}</p>
            <p className={styles.card_subHeading}>{subHeading}</p>
            <p className={styles.card_price}>{price}</p>
        </div>
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
    * the heading of the card */
    subHeading: propTypes.string,
    /*
    *
    * the text of the card */
    price: propTypes.string,
    /*
    *
    * the onCLick listener */
   onClick: propTypes.func,
    /*
    *
    * any applied classnames */
    className: propTypes.string,
}

export default Card
