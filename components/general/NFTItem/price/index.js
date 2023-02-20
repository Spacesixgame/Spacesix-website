import React from 'react'
import styles from './style.module.css'

const NFTPrice = ({children}) => {
  return (
    <div className={styles.price}>{children}</div>
  )
}

export default NFTPrice