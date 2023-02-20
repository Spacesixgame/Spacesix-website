import React from 'react'
import View from './view'
import UpcommingEventsList from './UpcommingEventsList'
import styles from './UpcommingEventsMain.module.css'
import UIStar from './UIStar'

const UpcommingEventsMain = () => {
  return (
    <div className={styles.main}>
      <View />
      <UpcommingEventsList />
      <UIStar />
    </div>
  )
}

export default UpcommingEventsMain
