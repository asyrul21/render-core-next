import React from "react"
import Link from "next/link"

// import style
import styles from "./navItems.module.scss"

const navItems = ({ items }) => {
  return (
    <div className={styles.navItemsContainer}>
      {items.map((item, idx) => {
        return (
          <Link
            key={idx}
            to={item.link}
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
          >
            {item.text}
          </Link>
        )
      })}
    </div>
  )
}

export default navItems
