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

// poppups
import PackagePopup from "components/packageCards/popup/packagePopup"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// import style
import styles from "./yourComponentName.module.scss"

export class yourComponentName extends Component {
    constructor(){
        super()
        this.state = {
            clickedItem: null
        }
    }


    handleClickPackage = (event, itemId) => {
        if(event){
            this.setState({
                clickedItem: itemId
            })
        }
    }

    handleClosePopup = (event) => {
        if(event){
            this.setState({
                clickedItem: null
            })
        }
    }


    render(){
        const { data } = this.props
        return (
            <>
                <SectionTitle text={data.heading} 
                    className={styles.landing_section_title_whyUs}/>
                <Content className={styles.contantContainer}>
                    <AnimateAppear>
                        <PackageCards 
                            data={data.packageCards}
                            onClick={this.handleClickPackage}
                        />
                    </AnimateAppear>
                </Content>

                {/* popups */}
                {this.state.clickedItem !== null && (
                    <PackagePopup 
                        onClose={this.handleClosePopup}
                        {...data.packageCards[this.state.clickedItem].popup}/>
                )}
            </>
        )
    }
}

/* Prop Definition */
yourComponentName.propTypes = {
  /*
   *
   * the data for the view to consume */
  data: propTypes.object,
}

export default yourComponentName
