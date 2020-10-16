import React, { Component, Fragment } from "react"
import TextBlock from "src/components/textBlock/textBlock"
import Image from "src/containers/Image/Image"
import propTypes from "prop-types"

import "./TextPhotoRow.scss"

class TextPhotoRow extends Component {
  renderTextBlock = props => {
    const { heading, paragraphs } = props
    return <TextBlock heading={heading} paragraphs={paragraphs}></TextBlock>
  }

  renderImage = props => {
    const { path, path_WEBP, path_JPEG2000 } = props.image

    if (path_WEBP && path_JPEG2000) {
      return <Image path_WEBP={path_WEBP} path_JPEG2000={path_JPEG2000}></Image>
    }
    return <Image path={path}></Image>
  }

  render() {
    const { pictureFirst, pictureLast } = this.props

    return (
      <div className="textPhotoRow_container">
        {pictureLast && (
          <Fragment>
            <div className="textPhotoRow_textBlock">
              {this.renderTextBlock(this.props)}
            </div>
            <div className="textPhotoRow_photoContainer">
              {this.renderImage(this.props)}
            </div>
          </Fragment>
        )}
        {pictureFirst && (
          <Fragment>
            <div className="textPhotoRow_photoContainer">
              {this.renderImage(this.props)}
            </div>
            <div className="textPhotoRow_textBlock">
              {this.renderTextBlock(this.props)}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}

TextPhotoRow.propTypes = {
  /*
   *
   * either to put the photo first then text */
  pictureFirst: propTypes.bool,
  /*
   *
   * either to put the text first then photo */
  pictureLast: propTypes.bool,
  /*
   *
   * the header of the text */
  heading: propTypes.string,
  /*
   *
   * the paragraphs */
  paragraphs: propTypes.arrayOf(propTypes.string),
  /*
   *
  /* the image path object */
  image: propTypes.shape({
    path: propTypes.string,
    path_WEBP: propTypes.string,
    path_JPEG2000: propTypes.string,
  }),
}

export default TextPhotoRow
