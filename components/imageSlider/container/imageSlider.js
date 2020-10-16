// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// component
import Slider from "../components/slider/slider"
import Caption from "../components/caption/caption"

// import style
import "./imageSlider.scss"

class ImageSlider extends Component {
  constructor() {
    super()
    this.state = {
      calculatedMargin: 0,
      containerWidth: 0,
      translateValue: 0,
      currentImage: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.onUpdateContainerWidth)
    const containerWidth = this.divElement.clientWidth
    const calculatedMargin = this.calculateMargin(containerWidth)
    this.setState({
      containerWidth,
      calculatedMargin,
    })
  }

  calculateMargin = containerWidth => {
    return (containerWidth - this.props.imageWidth) / 2
  }

  onUpdateContainerWidth = () => {
    const containerWidth = this.divElement.clientWidth
    const calculatedMargin = this.calculateMargin(containerWidth)

    this.setState(prevState => {
      const marginDifference = prevState.calculatedMargin - calculatedMargin
      const translateValue =
        prevState.currentImage !== 0
          ? prevState.translateValue +
            marginDifference * 2 * this.state.currentImage
          : prevState.translateValue

      return {
        containerWidth,
        calculatedMargin,
        translateValue,
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onUpdateContainerWidth)
  }

  handleClickForward = event => {
    if (event) {
      const newTranslateValue = this.updateTranslateForward()
      if (this.state.currentImage < this.props.images.length - 1) {
        const nextImage = this.state.currentImage + 1
        return this.setState({
          translateValue: newTranslateValue,
          currentImage: nextImage,
        })
      }
    }
  }

  updateTranslateForward = (imageWidth = this.props.imageWidth) => {
    return (
      this.state.translateValue - imageWidth - this.state.calculatedMargin * 2
    )
  }

  handleClickPrevious = event => {
    if (event) {
      const newTranslateValue = this.updateTranslateBackward()
      if (this.state.currentImage !== 0) {
        const nextImage = this.state.currentImage - 1
        return this.setState({
          translateValue: newTranslateValue,
          currentImage: nextImage,
        })
      }
    }
  }

  updateTranslateBackward = (imageWidth = this.props.imageWidth) => {
    return (
      this.state.translateValue + imageWidth + this.state.calculatedMargin * 2
    )
  }

  render() {
    const { images, imageWidth, className } = this.props

    // define container classes here
    const styleClasses = classnames({
      imageSliderContainer: true,
      [`${className}`]: className,
    })

    const sliderProps = {
      ...this.state,
      imageWidth,
      data: images,
    }
    return (
      <div
        className={styleClasses}
        ref={divElement => {
          this.divElement = divElement
        }}
      >
        <div
          className={classnames(
            "imageSlider_navButton",
            "imageSlider_previousButton"
          )}
          onClick={this.handleClickPrevious}
        />
        <div
          className={classnames(
            "imageSlider_navButton",
            "imageSlider_forwardButton"
          )}
          onClick={this.handleClickForward}
        />
        <Slider {...sliderProps} />
        <Caption
          text={images[this.state.currentImage].caption}
          fontColor="dark"
        />
      </div>
    )
  }
}

/* Prop Definition */
ImageSlider.propTypes = {
  /*
   *
   * images to render as a slider */
  images: propTypes.arrayOf(
    propTypes.shape({
      path: propTypes.string,
      path_WEBP: propTypes.string,
      path_JPEG2000: propTypes.string,
    })
  ),
  /*
   *
   * width of individual image. Important for translation purposes */
  imageWidth: propTypes.number.isRequired,
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default ImageSlider

// https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react

// https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element
