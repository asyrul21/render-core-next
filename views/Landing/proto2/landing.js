import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// import components
import Image from "containers/Image/Image"
import Button from "components/buttons/indexButton/indexButton"

// import style
import styles from "./landing.module.scss"

export const Landing = props => {
  const { 
      backgroundImage, 
      logoImage, 
      heading, 
      subHeading, 
      buttonText, 
      link,
      onClickIndexButton, 
      className } = props

  // define container classes here
  const styleClasses = classnames({
    [styles.heroContainer]: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
        <div className={styles.hero_backgroundImage}>
            <Image {...backgroundImage}/>
        </div>
        <div className={classnames("overlay", styles.hero_overlay)}/>
        <div className={styles.heroContent}>
            <div className={styles.hero_LogoImage}>
                <Image {...logoImage}/>
            </div>
            <h4 className={styles.hero_heading}>{heading}</h4>
            <div className={styles.hero_subHeading}>{subHeading}</div>
            {link && !onClickIndexButton &&
                 <Button text={buttonText} backgroundColor="white" fontColor="dark" className={styles.hero_button} link={link}/>
            }
            {onClickIndexButton && 
                <Button text={buttonText} backgroundColor="white" fontColor="dark" className={styles.hero_button} onClick={onClickIndexButton}/>
            }
        </div>
    </div>
  )
}

/* Prop Definition */
Landing.propTypes = {
  /*
   *
   * the background image paths */
  backgroundImage: propTypes.shape({
    path: propTypes.string,
    path_WEBP: propTypes.string,
    path_JPEG2000: propTypes.string,
  }),
  /*
   *
   * the logo image paths */
  logoImage: propTypes.shape({
    path: propTypes.string,
    path_WEBP: propTypes.string,
    path_JPEG2000: propTypes.string,
  }),
  heading: propTypes.string,
  subHeading: propTypes.string,
  /*
   *
   * the text on the button */
  buttonText: propTypes.string,
  /*
   *
   * the link or route which the button leads to */
  link: propTypes.string,
  /*
   *
   * onClick listener callback */
  onClickIndexButton: propTypes.func,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default Landing