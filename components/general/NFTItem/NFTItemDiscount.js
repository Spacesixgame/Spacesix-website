import React from 'react'
import styles from './NFTItemDiscount.module.css'

const NFTItemDiscount = ({discount}) => {
  return (
    <div className={styles.discount}>{discount}% Off</div>
  )
}

export default NFTItemDiscount