import React from "react"
import cx from "classnames"

// components
import Content from "containers/Content/Content"
import ContentDoubleColumn from "containers/Content-Double-Column/ContentDoubleColumn"
import TextBlock from "components/textBlock/textBlock"
import SimpleForm from "components/forms/simple/form"
import ContactInformation from "components/contactInformation/contactInformation"

// import style
import styles from "./contact.module.scss"

const Contact = (props) => {
  const { data } = props
  return (
    <ContentDoubleColumn className={styles.contentLayout}>
      <div className={cx(styles.contact_column, styles.contact_leftCol)}>
        <TextBlock
          heading={data.text.heading}
          paragraphs={data.text.paragraphs}
        />
        <div className={styles.contact_formContainer}>
          <SimpleForm
            field1={data.formPlaceholders.field1}
            field2={data.formPlaceholders.field2}
            field3={data.formPlaceholders.field3}
            handleSubmit={event => {
              console.log("Submitted!")
              console.log("event:", event)
            }}
          />
        </div>
      </div>
      <div className={cx(styles.contact_column, styles.contact_rightCol)}>
        <div className={styles.contact_googleMapAPI}>Google map go here</div>
        <div className={styles.contact_contactInfoContainer}>
          <ContactInformation data={data.contactInformation} />
        </div>
      </div>
    </ContentDoubleColumn>
  )
}

export default Contact
