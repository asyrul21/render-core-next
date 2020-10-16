// template to create a new component
import React from "react"
import propTypes, { arrayOf } from "prop-types"
import classnames from "classnames"

// components
import OrgChartRowItems from "./OrgChartRowItems/OrgChartRowItems"

// import style
import "./OrgChartRow.scss"

export const OrgChartRow = props => {
  const { data, className } = props

  // define container classes here
  const styleClasses = classnames({
    orgChartRowContainer: true,
    [`${className}`]: className,
  })

  return (
    <div className={styleClasses}>
      <h4 className="orgChartRow_header">{data.title}</h4>
      <OrgChartRowItems items={data.team} />
    </div>
  )
}

/* Prop Definition */
OrgChartRow.propTypes = {
  /*
   *
   * the data to render */
  data: propTypes.shape(
    propTypes.shape({
      title: propTypes.string,
      people: arrayOf(
        propTypes.shape({
          name: propTypes.string,
          education: propTypes.string,
          position: propTypes.string,
          path: propTypes.string,
          path_WEBP: propTypes.string,
          path_JPEG2000: propTypes.string,
        })
      ),
    })
  ),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default OrgChartRow
