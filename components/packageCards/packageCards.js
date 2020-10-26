// template to create a new component
import React, { Component } from "react"
import propTypes from "prop-types"
import classnames from "classnames"

// dependency component
import Card from "./card/card"
import PackagePopup from "./popup/packagePopup"
import AnimateAppear from "components/animators/reveal-fade-appear"

// import style
import styles from "./packageCards.module.scss"


class PackageCards extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickedItem: null
    }
  }

  handleClick = (event, itemId) => {
    console.log("Clicked on item #:", itemId);
    if(event){
      this.setState({
        clickedItem: itemId
      })
    }
  }

  handleClosePopup = (event) => {
    if(event){
      this.setState({
        clickedItem: null
      })
    }
  }


  render(){
    const { data, className } = this.props

    // define container classes here
    const styleClasses = classnames({
      [styles.packageCardsContainer]: true,
      [`${className}`]: className,
    })

    return (
      <>
        <div className={styleClasses}>
          { data.map((item, idx) => {
              return (
                <Card key={idx} {...item} onClick={
                  (event) => {this.handleClick(event, idx)}}/>
              )
          })}
        </div>
        {this.state.clickedItem !== null && (
          <PackagePopup onClose={this.handleClosePopup}/>
        )}
      </>
    )
  }
}

/* Prop Definition */
PackageCards.propTypes = {
  /*
   *
   * the data to be rendered as info cards */
  data: propTypes.arrayOf(propTypes.shape({
      icon: propTypes.shape({
        path: propTypes.string,
        path_WEBP: propTypes.string,
        path_JPEG2000: propTypes.string,
      }),
      heading: propTypes.string,
      subHeading: propTypes.string,
      price: propTypes.string
  })),
  /*
   *
   * any applied classnames */
  className: propTypes.string,
}

export default PackageCards
