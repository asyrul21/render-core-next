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
import PackageCards from "components/packageCards/packageCards"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// import style
import styles from "./yourComponentName.module.scss"

export const yourComponentName = (props) => {
    const { data } = props
    return (
        <>
             <Content className={styles.contentContainer} ref={this.programmesRef}>
                    <div className={classnames("backgroundImage")}>
                        <Image {...data.background }/>
                    </div>
                    <SectionTitle text={data.title} className={styles.sectionTitle}/>
    
                    <AnimateAppearFromBottom>
                        <PriceCards data={data.programmes}/>
                    </AnimateAppearFromBottom>
            </Content>            
        </>
    )
}

/* Prop Definition */
yourComponentName.propTypes = {
  /*
   *
   * the data for the view to consume */
  data: propTypes.object,
}

export default yourComponentName
