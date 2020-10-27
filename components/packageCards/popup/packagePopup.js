// template to create a new component
import React, { Fragment } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import component
import Image from "containers/Image/Image"
import Poppup from "components/popups/generic/popup"

// import style
import styles from "./packagePopup.module.scss"

export const PackagePopup = props => {
  const { image, heading, subHeading, price, onClose, paragraphs } = props

  return (
    <Poppup onClose={onClose}>
        <div className={styles.popupImage}>
            <Image {...image}/>
        </div>
        <div className={styles.popupTextContainer}>
            <p className={styles.packagePopupHeading}>{heading}</p>
            <p className={styles.packagePopupSubHeading}>{subHeading}</p>
            <p className={styles.packagePopupPrice}>{price}</p>
            {paragraphs.map((text, idx) => (
                <p className={styles.packagePopupParagraphs}>{text}</p>
            ))}
        </div>
    </Poppup>
  )
}

/* Prop Definition */
PackagePopup.propTypes = {
    /*
    *
    * the image of the popup */
    image: propTypes.shape({
        path: propTypes.string,
        path_WEBP: propTypes.string,
        path_JPEG2000: propTypes.string,
        }),
    /*
    *
    * the heading of popup */
    heading: propTypes.string,
    /*
    *
    * the subHeading of popup */
    subHeading: propTypes.string,
    /*
    *
    * the price */
    price: propTypes.string,
    /*
    *
    * the function to execute on closing popup */
    onClose: propTypes.func,
    /*
    *
    * the link or route which the button leads to */
    paragraphs: propTypes.arrayOf(propTypes.string),
}

export default PackagePopup
