// template to create a new component
import React, { Fragment } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import component
import Image from "containers/Image/Image"
import AnimateAppear from "components/animators/reveal-fade-appear"

// import style
import styles from "./popup.module.scss"

const Popup = props => {
    const { onClose, className, children } = props

  const handleClose = (event, cb) => {
    event.preventDefault()
    cb(event)
  }

    // define container classes here
    const styleClasses = classnames({
        [styles.poppupContainer]: true,
        [`${className}`]: className,
      })

  return (
      <Fragment>
          <div className="popupBackdrop" onClick={(e) => handleClose(e, onClose)}/>
          <AnimateAppear duration={300} delay={0}>
            <div className={styleClasses}>
                <div className={styles.closeButton} onClick={(e) => handleClose(e, onClose)}>
                  <Image path="icons/closeButton.png"/>
                </div>
                { children }
            </div>
          </AnimateAppear>
      </Fragment>
  )
}

/* Prop Definition */
Popup.propTypes = {
   /*
    *
    * the onClose method */
   onClose: propTypes.func,
    /*
    *
    * className */
    className: propTypes.string,
     /*
    *
    * the children which is the main popup item */
   children: propTypes.node,
}

export default Popup
