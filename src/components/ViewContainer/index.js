import React, { useState } from 'react'

import VerticalNavBar from './../VerticalNavBar'
import TodoView from './../../views/TodoView'
import DoneView from './../../views/DoneView'

const ViewContainer = () => {
  const [tab, setTab] = useState(1)
  console.log('tab in view cont is: ' + tab)
  {
    return (
      <div id="view-container" className="flexbox">
        <VerticalNavBar setTab={setTab} activeTab={tab} />
        {tab == 1 && <TodoView />}
        {tab == 2 && <DoneView />}
      </div>
    )
  }
}
export default ViewContainer
