import React from 'react'
import Button from '@material-ui/core/Button'
import './styles.css'
import { Assignment, AssignmentTurnedIn } from '@material-ui/icons'

class VerticalNavBar extends React.Component {
  render() {
    return (
      <div id="v-navbar-container" className="bg-navy">
        <Button active className="vbar-button bg-navy p-2 fg-white">
          <Assignment style={{ 'margin-right': '5px' }} />
          <span className="vbar-button-span">Attività da completare</span>
        </Button>
        <Button className="vbar-button bg-navy p-2 fg-white">
          <AssignmentTurnedIn style={{ 'margin-right': '5px' }} />
          <span className="vbar-button-span">Attività completate</span>{' '}
        </Button>
      </div>
    )
  }
}
export default VerticalNavBar
