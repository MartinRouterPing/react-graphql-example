import React from 'react'
import VerticalNavBar from './../VerticalNavBar'
import TodoView from './../../views/TodoView'
class ViewContainer extends React.Component {
  render() {
    return (
      <div id="view-container" className="flexbox">
        <VerticalNavBar />
        <TodoView />
      </div>
    )
  }
}
export default ViewContainer
