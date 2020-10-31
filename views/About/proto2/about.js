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

// view specific component
import TextBlock from "components/textBlock/textBlock"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// import style
import styles from "./about.module.scss"

export const About = (props) => {
    const { data } = props
    return (
        <>
            <ContentDoubleColumn className={styles.sectionContainer}>
                <AnimateAppearFrom direction="left">
                    <div 
                        className={
                            classnames("doubleColumnHalf", 
                            styles.section_left_side)}>
                        <TextBlock 
                            heading={data.textBlock.heading}
                            paragraphs={data.textBlock.paragraphs}
                            headingClassname={styles.textBlockHeading}
                            paragraphClassname={styles.textBlockParagraphs}
                        />
                    </div>
                </AnimateAppearFrom>
                <AnimateAppearFrom direction="right">
                    <div 
                        className={
                            classnames("doubleColumnHalf", 
                            styles.section_right_side)}>
                        <Image {...data.background}/> 
                    </div>
                </AnimateAppearFrom>
            </ContentDoubleColumn>   
        </>
    )
}

/* Prop Definition */
About.propTypes = {
  /*
   *
   * the data for the view to consume */
  data: propTypes.object,
}

export default About
