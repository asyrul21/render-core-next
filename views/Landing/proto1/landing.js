import React, { Component } from "react"
import propTypes from "prop-types"
import cx from "classnames"

// import style
import styles from "./landing.module.scss"

// import component
import Button from "components/buttons/indexButton/indexButton"
import Image from "containers/Image/Image"

// data
import data from "public/data/index/data.json"

const Landing = (props) => {
    const { 
        backgroundImage, 
        sideImage, 
        heading, 
        subHeading, 
        buttonText 
    } = props;

    const buttonProps = {
        backgroundColor: "orange",
        borderRadius: "50",
        link: "/programmes",
        fontColor: "white",
        text: buttonText
    }

    return (
        <div className={styles.heroContainer}>
            <div className={styles.backgroundImage}>
                <Image { ...backgroundImage }/>    
            </div>
            <div className="overlay"/>
            <div className={styles.heroContent}>
                <div className={styles.heroSideImage}>
                    <Image { ...sideImage }/>
                </div>

                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroHeading}
                    dangerouslySetInnerHTML={{ __html: heading }}/>
                    <p className={styles.heroSubHeading}>{subHeading}</p>

                    <Button {...buttonProps}/>
                </div>
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
    heading: propTypes.string,
    subHeading: propTypes.string,
    /*
    *
    * the text on the button */
    buttonText: propTypes.string
}

export default Landing
