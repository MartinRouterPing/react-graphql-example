import React from 'react'

class TodoTable extends React.Component {
  render() {
    return (
      <div>
        <table style={{ width: '90%' }}>
          <tr>
            <th>Attività</th>
            <th>Operatore</th>
            <th></th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <button>svolgi</button>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <button>svolgi</button>
          </tr>
        </table>
      </div>
    )
  }
}
export default TodoTable
