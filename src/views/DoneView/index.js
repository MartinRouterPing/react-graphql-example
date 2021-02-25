import React from 'react'
import './styles.css'
import FilterByEmployeeName from './../../forms/FilterByEmployeeName'
import TodoTable from './../../components/TodoTable'
import AddTodoForm from './../../forms/AddTodoForm'

class DoneView extends React.Component {
  render() {
    return (
      <div
        id="todo-view-container"
        className="p-2"
        style={{ 'background-color': '#e6ebef' }}
      >
        <h3 className="todo-view-title">Attività Completate</h3>
        <FilterByEmployeeName />
        <TodoTable />
      </div>
    )
  }
}
export default DoneView
