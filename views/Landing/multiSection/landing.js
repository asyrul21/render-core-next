import React, { Component, Fragment } from "react"
import classnames from "classnames"

// import components
import CustomHero from "components/heros/custom/hero"
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle"
import Content from "containers/Content/Content"
import ContentDoubleColumn from "containers/Content-Double-Column/ContentDoubleColumn"
import InfoCards from "components/infoCards/infoCards"
import PackageCards from "components/packageCards/packageCards"
import PriceCards from "components/priceCards/priceCards"
import Button from "components/buttons/indexButton/indexButton"
import TextBlock from "components/textBlock/textBlock"
import ContactSection from "../../Contact/proto2/contact"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// poppups
import PackagePopup from "components/packageCards/popup/packagePopup"

// data
import data from "public/data/index/data3.json"
import Image from "containers/Image/Image"

// import style
import styles from "./landing.module.scss"

class Landing extends Component {
    constructor(){
        super()
        this.programmesRef = React.createRef()

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

    // handleIndexButtonClick = (event) => {
    //     console.log("Index BUtton clicked!");
    //     this.programmesRef.current.scrollIntoView({behavior: "smooth"})
    //     // smoooth does not work with safari
    // }

    render(){
        const heroProps = {
            ...data.hero
        }
    
        const section1Data = data.section1;
        const section2Data = data.section2;
        const section3Data = data.section3;
        return (
            <Fragment>
                <CustomHero {...heroProps}/>
                {/* <SectionTitle text={section1Data.heading} className={styles.landing_section_title_whyUs}/> */}
                <Content className={styles.landing_section_1}>
                    <AnimateAppear>
                        <PackageCards 
                            data={section1Data.packageCards}
                            onClick={this.handleClickPackage}
                        />
                    </AnimateAppear>
                </Content>
                <ContentDoubleColumn className={styles.landing_section_2} ref={this.programmesRef}>
                    <AnimateAppearFrom direction="left">
                        <div 
                            className={
                                classnames("doubleColumnHalf", 
                                styles.landing_section_2_left)}>
                            <TextBlock 
                                heading={section2Data.textBlock.heading}
                                paragraphs={section2Data.textBlock.paragraphs}
                                headingClassname={styles.textBlockHeading}
                                paragraphClassname={styles.textBlockParagraphs}
                            />
                        </div>
                    </AnimateAppearFrom>
                    <AnimateAppearFrom direction="right">
                        <div 
                            className={
                                classnames("doubleColumnHalf", 
                                styles.landing_section_2_right)}>
                            <Image {...section2Data.background}/> 
                        </div>
                    </AnimateAppearFrom>
                </ContentDoubleColumn>
                <ContactSection data={section3Data}/>

                {/* popups */}
                {this.state.clickedItem !== null && (
                    <PackagePopup 
                        onClose={this.handleClosePopup}
                        {...section1Data.packageCards[this.state.clickedItem].popup}/>
                )}
            </Fragment>
        )
    }
}

export default Landing


{/* <div className={classnames("backgroundImage")}>
<Image {...section2Data.background }/>
</div>
<SectionTitle text={section2Data.title} className={styles.landing_section_title_programmes}/>

<AnimateAppearFrom>
<PriceCards data={section2Data.programmes}/>
</AnimateAppearFrom> */}


{/* <AnimateAppear>
<p className={styles.landing_contact_text}>
    { section3Data.text }
</p>
<Button text={ section3Data.buttonText } className={styles.landing_contact_button} fontColor="white"
external link={ section3Data.buttonLink }
/>
</AnimateAppear> */}