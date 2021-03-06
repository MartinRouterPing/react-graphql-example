import React from 'react'
import './styles.css'
import FilterByEmployeeName from './../../forms/FilterByEmployeeName'
import TodoTable from './../../components/TodoTable'
import AddTodoForm from './../../forms/AddTodoForm'
import * as Constants from '../../api/constants'

class TodoView extends React.Component {
  render() {
    return (
      <div
        id="todo-view-container"
        className="p-2"
        style={{ 'background-color': '#e6ebef' }}
      >
        <h3 className="todo-view-title">Attività da completare</h3>
        <FilterByEmployeeName />
        <TodoTable query={Constants.GQL_QUERY_TODO} />
        <h3 className="todo-view-title">Attività da completare</h3>
        <AddTodoForm />
      </div>
    )
  }
}
export default TodoView
