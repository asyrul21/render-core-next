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
import PriceCards from "components/priceCards/priceCards"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// import style
import styles from "./packages.module.scss"

export const Packages = (props) => {
    const { data } = props
    return (
        <>
             <Content className={styles.packagesContainer}>
                    <div className={classnames("backgroundImage")}>
                        <Image {...data.background }/>
                    </div>
                    <SectionTitle text={data.title} className={styles.sectionTitle}/>
    
                    <AnimateAppearFrom>
                        <PriceCards data={data.programmes}/>
                    </AnimateAppearFrom>
            </Content>            
        </>
    )
}

/* Prop Definition */
Packages.propTypes = {
  /*
   *
   * the data for the view to consume */
  data: propTypes.object,
}

export default Packages


// ref={this.programmesRef}