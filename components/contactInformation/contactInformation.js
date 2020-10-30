// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import ContactItem from "./contactItem/contactItem"

// import style
import styles from "./contactInformation.module.scss"

export const ContactInformation = props => {
  const { data, className } = props

  // define container classes here
  const styleClasses = classnames({
    [styles.contactInformationContainer]: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      {/* whatever you need to do here */}
      {/* avoid using style tags */}
      {data.map((item, idx) => {
        return <ContactItem key={idx} item={item} />
      })}
    </div>
  )
}

/* Prop Definition */
ContactInformation.propTypes = {
  /*
   *
   * the data that contains the necessary information */
  data: propTypes.array,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default ContactInformation
