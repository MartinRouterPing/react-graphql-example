import React from 'react'
import './styles.css'
import FilterByEmployeeName from './../../forms/FilterByEmployeeName'
import TodoTable from './../../components/TodoTable'
import * as Constants from '../../api/constants'

class DoneView extends React.Component {
  render() {
    return (
      <div
        id="done-view-container"
        className="p-2"
        style={{ 'background-color': '#e6ebef' }}
      >
        <h3 className="done-view-title">Attività Completate</h3>
        <FilterByEmployeeName />
        <TodoTable query={Constants.GQL_QUERY_DONE} />
      </div>
    )
  }
}
export default DoneView
