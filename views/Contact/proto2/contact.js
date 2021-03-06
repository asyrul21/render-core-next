// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
// delete those not needed
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle"
import Content from "containers/Content/Content"
import ContentDoubleColumn from "containers/Content-Double-Column/ContentDoubleColumn"
import Image from "containers/Image/Image"
import Button from "components/buttons/indexButton/indexButton"

// view specific component
import PackageCards from "components/packageCards/packageCards"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// import style
import styles from "./contact.module.scss"

export const Contact = (props) => {
    const { data } = props
    return (
        <>
            <Content className={styles.contentContainer}>
                <SectionTitle text={data.title} className={styles.sectionTitle}/>
                <AnimateAppear>
                    <p className={styles.text}>
                        { data.text }
                    </p>
                    <Button text={ data.buttonText } className={styles.button} fontColor="white"
                    external link={ data.buttonLink }
                    />
                </AnimateAppear>
            </Content>   
        </>
    )
}

/* Prop Definition */
Contact.propTypes = {
  /*
   *
   * the data for the view to consume */
  data: propTypes.object,
}

export default Contact
