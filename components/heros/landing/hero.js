import React, { Component } from "react"
import propTypes from "prop-types"
import cx from "classnames"

// import style
import styles from "./hero.module.scss"

// import component
import Button from "src/components/buttons/indexButton/indexButton"

// config
import config from "./config.json"
// data
import data from "public/data/index/data.json"

class Hero extends Component {
  render() {
    const contentLayoutClass =
      this.props.layout === "singleColumn"
        ? styles.singleColumnContent
        : styles.doubleColumnContent

    const textLayoutClass =
      this.props.layout === "singleColumn"
        ? styles.singleColumnHeroTextContainer
        : styles.doubleColumnHeroTextContainer

    return (
      <div className={styles.heroContainer}>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${config.backgroundImagePath})`,
          }}
        />

        {config.overlay && (
          <div
            className="overlay"
            style={{
              background: `${config.overlay.overlayColor}`,
            }}
          />
        )}

        {config.hasContent && (
          <div className={cx(styles.heroContent, contentLayoutClass)}>
            {config.sideImagePath && this.props.layout === "doubleColumn" && (
              <div
                className={styles.heroSideImage}
                style={{
                  backgroundImage: `url(${config.sideImagePath})`,
                }}
              />
            )}
            {data && (
              <div className={cx(styles.heroTextContainer, textLayoutClass)}>
                {data.heading && (
                  <h1
                    className={styles.heroHeading}
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                )}

                {data.subHeading && (
                  <p className={styles.heroSubHeading}>{data.subHeading}</p>
                )}

                {config.button && (
                  <Button
                    {...config.button}
                    text={data.button}
                    backgroundColor={config.button.color}
                    fontColor={config.button.linkColor}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

Hero.propTypes = {
  layout: propTypes.oneOf(["singleColumn", "doubleColumn"]),
}

export default Hero
