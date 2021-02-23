import React from 'react'
import './styles.css'
import FilterByEmployeeName from './../../forms/FilterByEmployeeName'
import TodoTable from './../../components/TodoTable'
import AddTodoForm from './../../forms/AddTodoForm'

class TodoView extends React.Component {
  render() {
    return (
      <div id="todo-view-container" style={{ 'background-color': '#e6ebef' }}>
        <FilterByEmployeeName />
        <TodoTable />
        <AddTodoForm />
      </div>
    )
  }
}
export default TodoView
