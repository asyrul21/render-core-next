import React from "react"
import cx from "classnames"

// components
import Content from "containers/Content/Content"
import TextBlock from "components/textBlock/textBlock"
import SimpleForm from "components/forms/simple/form"
import ContactInformation from "components/contactInformation/contactInformation"

// data
import data from "public/data/contact/data.json"

// import style
import "./contact.module.scss"

const Contact = () => {
  return (
    <Content className="contact_Content_layout">
      <div className={cx("contact_column", "contact_leftCol")}>
        <TextBlock
          heading={data.text.heading}
          paragraphs={data.text.paragraphs}
        />
        <div className="contact_formContainer">
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
      <div className={cx("contact_column", "contact_rightCol")}>
        <div className="contact_googleMapAPI">Google map go here</div>
        <div className="contact_contactInfoContainer">
          <ContactInformation data={data.contactInformation} />
        </div>
      </div>
    </Content>
  )
}

export default Contact
