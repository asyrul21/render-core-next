// template to create a new component
import React from "react"
import propTypes, { arrayOf } from "prop-types"
import classnames from "classnames"

// component
import OrgChartRowItem from "./OrgChartRowItem/OrgChartRowItem"

// import style
import "./OrgChartRowItems.scss"

export const OrgChartRowItems = props => {
  const { items, className } = props

  // define container classes here
  const styleClasses = classnames({
    OrgChartRowItemsContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      {items.map((person, idx) => {
        return (
          <OrgChartRowItem
            key={idx}
            title={person.name}
            subHeading1={person.education}
            subHeading2={person.position}
            image={person.image}
          />
        )
      })}
    </div>
  )
}

/* Prop Definition */
OrgChartRowItems.propTypes = {
  items: arrayOf(
    propTypes.shape({
      name: propTypes.string,
      education: propTypes.string,
      position: propTypes.string,
      image: propTypes.shape({
        path: propTypes.string,
        path_WEBP: propTypes.string,
        path_JPEG2000: propTypes.string,
      }),
    })
  ),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default OrgChartRowItems
