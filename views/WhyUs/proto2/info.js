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
import InfoCards from "components/infoCards/infoCards"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// import style
import styles from "./info.module.scss"

export const InfoSection = (props) => {
    const { data } = props
    return (
        <>
            <SectionTitle text={data.heading} className={styles.landing_section_title_whyUs}/>
            <Content className={styles.landing_section_whyUs}>
                <AnimateAppear>
                    <InfoCards data={data.infoCards}/>
                </AnimateAppear>
            </Content> 
        </>
    )
}

/* Prop Definition */
InfoCards.propTypes = {
  /*
   *
   * the data for the view to consume */
  data: propTypes.object,
}

export default InfoSection
