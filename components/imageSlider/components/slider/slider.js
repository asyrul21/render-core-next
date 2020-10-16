// template to create a new component
import React from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// component
import Image from "containers/Image/Image"

// import style
import "./slider.module.scss"

export const Slider = props => {
  const {
    data,
    translateValue,
    calculatedMargin,
    className,
    imageWidth,
  } = props

  // define container classes here
  const styleClasses = classnames({
    sliderContainer: true,
    [`${className}`]: className,
  })

  // translate style
  const translateStyle = {
    transform: `translateX(${translateValue}px)`,
  }

  return (
    <div className={styleClasses} style={translateStyle}>
      {data.map((image, idx) => {
        return (
          <div
            key={idx}
            className="slider_imageItem"
            style={{
              width: `${imageWidth}px`,
              margin: `0 ${calculatedMargin}px`,
            }}
          >
            <Image {...image} />
          </div>
        )
      })}
    </div>
  )
}

/* Prop Definition */
Slider.propTypes = {
  /*
   *
   * images to render as a slider */
  data: propTypes.arrayOf(
    propTypes.shape({
      path: propTypes.string,
      path_WEBP: propTypes.string,
      path_JPEG2000: propTypes.string,
    })
  ),
  /*
   *
   * the width of individual image */
  imageWidth: propTypes.number,
  /*
   *
   * value of translateX() */
  translateValue: propTypes.number,
  /*
   *
   * the calculated margin */
  calculatedMargin: propTypes.number,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default Slider
