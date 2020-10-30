import React from "react"
import cx from "classnames"

// components
import Content from "containers/Content/Content"
import TextBlock from "components/textBlock/textBlock"
import SimpleForm from "components/forms/simple/form"
import ContactInformation from "components/contactInformation/contactInformation"
import ContentDoubleColumn from "containers/Content-Double-Column/ContentDoubleColumn"
import SectionTitle from "components/sectionTitles/sectionTitle1/sectionTitle"

import AnimateAppearFrom from "components/animators/reveal-fade-appear-from"

// data
import data from "public/data/index/data3.json"

// import style
import styles from "./contact.module.scss"

const Contact = (props) => {
    const contactSectionData = data.section3;
    return (
        <Content className={styles.contact_container}>
            <SectionTitle 
                text={contactSectionData.title} 
                className={styles.section_title}/>
           
           <ContentDoubleColumn 
            className={styles.contact_DoubleContent_Container}>
                <AnimateAppearFrom direction="left">
                    <div
                        className={cx("doubleColumnHalf",
                                styles.contact_left_column)}>
                        <TextBlock
                            paragraphs={contactSectionData.text.paragraphs}
                            className={styles.contact_text_block}
                        />
                        <div className="contact_formContainer">
                            <SimpleForm
                                field1={contactSectionData.formPlaceholders.field1}
                                field2={contactSectionData.formPlaceholders.field2}
                                field3={contactSectionData.formPlaceholders.field3}
                                handleSubmit={event => {
                                console.log("Submitted!")
                                console.log("event:", event)
                                }}
                            />
                        </div>
                    </div>
                </AnimateAppearFrom>
                <AnimateAppearFrom direction="right">
                    <div
                        className={cx("doubleColumnHalf",
                                styles.contact_right_column)}>
                        <div className={styles.contact_googleMapAPI}>Google map go here</div>
                        <div className={styles.contact_contactInfoContainer}>
                            <ContactInformation data={contactSectionData.contactInformation} />
                        </div>
                    </div>
                </AnimateAppearFrom>
            </ContentDoubleColumn>
        </Content>
        
    )
}

export default Contact