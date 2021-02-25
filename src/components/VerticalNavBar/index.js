import React, { useState, setState } from 'react'
import Button from '@material-ui/core/Button'
import './styles.css'
import { Assignment, AssignmentTurnedIn } from '@material-ui/icons'

const VerticalNavBar = (props) => {
  const { setTab, activeTab } = props
  return (
    <div id="v-navbar-container" className="bg-navy">
      <Button
        className={`vbar-button  bg-navy p-2 fg-white ${
          activeTab == 1 ? 'red-border' : ''
        }`}
        onClick={() => setTab(1)}
      >
        <Assignment style={{ 'margin-right': '5px' }} />
        <span className="vbar-button-span">Attività da completare</span>
      </Button>
      <Button
        className={`vbar-button  bg-navy p-2 fg-white ${
          activeTab == 2 ? 'red-border' : ''
        }`}
        onClick={() => setTab(2)}
      >
        <AssignmentTurnedIn style={{ 'margin-right': '5px' }} />
        <span className="vbar-button-span">Attività completate</span>{' '}
      </Button>
    </div>
  )
}
export default VerticalNavBar
