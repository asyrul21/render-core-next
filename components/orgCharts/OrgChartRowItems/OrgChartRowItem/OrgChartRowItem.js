// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import Image from "containers/Image/Image"

// import style
import "./OrgChartRowItem.module.scss"

export const OrgChartRowItem = props => {
  const { title, subHeading1, subHeading2, image, className } = props

  // define container classes here
  const styleClasses = classnames({
    OrgChartRowItemContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      <div className="orgChartRowItem_ImageContainer">
        <Image {...image} />
      </div>
      <p className="orgChartRowItem_people_title">{title}</p>
      <p className="orgChartRowItem_people_sub1">{subHeading1}</p>
      <p className="orgChartRowItem_people_sub2">{subHeading2}</p>
    </div>
  )
}

/* Prop Definition */
OrgChartRowItem.propTypes = {
  /*
   *
   * the title: name of the person */
  title: propTypes.string,
  /*
   *
   * the education / position of the person */
  subHeading1: propTypes.string,
  /*
   *
   * the education / position of the person */
  subHeading2: propTypes.string,
  /*
   *
   * the image path object */
  image: propTypes.shape({
    path: propTypes.string,
    path_WEBP: propTypes.string,
    path_JPEG2000: propTypes.string,
  }),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

// export default withSpacing(OrgChartRowItem)
export default OrgChartRowItem
