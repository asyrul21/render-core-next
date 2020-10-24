import React, { Component } from "react"

// import components
import Image from "containers/Image/Image"
import NavItems from "./navItems/navItems"

// import style
import styles from "./navbar.module.scss"

// component config
import config from "./config.json"
class Navbar extends Component {

  render() {
    return (
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Image path={ config.logo }/>
        </div>
        {/* need to check width */}
        {/* if too narrow, use Hamburger */}
        <NavItems items={config.navLinks} />
      </div>
    )
  }
}

export default Navbar
