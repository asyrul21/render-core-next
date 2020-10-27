import React, { Component, Fragment } from "react"
import classnames from "classnames"

// import components
import CustomHero from "components/heros/custom/hero"
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle"
import Content from "containers/Content/Content"
import InfoCards from "components/infoCards/infoCards"
import PackageCards from "components/packageCards/packageCards"
import PriceCards from "components/priceCards/priceCards"
import Button from "components/buttons/indexButton/indexButton"
import TextBlock from "components/textBlock/textBlock"

// animators
import AnimateAppear from "components/animators/reveal-fade-appear"
import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// data
import data from "public/data/index/data3.json"
import Image from "containers/Image/Image"

// import style
import styles from "./landing.module.scss"

class Landing extends Component {
    constructor(){
        super()
        this.programmesRef = React.createRef()
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
                        <PackageCards data={section1Data.packageCards}/>
                    </AnimateAppear>
                </Content>
                <Content className={styles.landing_section_2} ref={this.programmesRef}>
                    {/* <div className={classnames("backgroundImage")}>
                        <Image {...section2Data.background }/>
                        </div>
                        <SectionTitle text={section2Data.title} className={styles.landing_section_title_programmes}/>
        
                        <AnimateAppearFrom>
                            <PriceCards data={section2Data.programmes}/>
                        </AnimateAppearFrom> */}

                    {/* double column content */}
                    <AnimateAppearFrom direction="left">
                        <div className={styles.landing_section_2_left}>
                            <TextBlock 
                                heading={section2Data.textBlock.heading}
                                paragraphs={section2Data.textBlock.paragraphs}
                                headingClassname={styles.textBlockHeading}
                                paragraphClassname={styles.textBlockParagraphs}
                            />
                        </div>
                    </AnimateAppearFrom>
                    <AnimateAppearFrom direction="right">
                        <div className={styles.landing_section_2_right}>
                            <Image {...section2Data.background}/>
                        </div>
                    </AnimateAppearFrom>
                </Content>

                   {/* 
                <Content className={styles.landing_contact}>
                    <SectionTitle text={section3Data.title} className={styles.landing_section_title_contact}/>
                    <AnimateAppear>
                        <p className={styles.landing_contact_text}>
                            { section3Data.text }
                        </p>
                        <Button text={ section3Data.buttonText } className={styles.landing_contact_button} fontColor="white"
                        external link={ section3Data.buttonLink }
                        />
                    </AnimateAppear>
                </Content> */}
            </Fragment>
        )
    }
}

export default Landing
