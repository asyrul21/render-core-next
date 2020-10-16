import React from "react"

// import style
import styles from "./footer.module.scss"

import config from "./config.json"
const Footer = props => {
  return <div className={styles.footerContainer}
  dangerouslySetInnerHTML={{ __html: config.text }}/>
}

export default Footer
