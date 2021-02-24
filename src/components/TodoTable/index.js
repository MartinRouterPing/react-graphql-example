import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const todos = [
  {
    description: 'Report',
    employee: 'Mario Rossi',
    done: 'false',
  },
  {
    description: 'Manutenzione',
    employee: 'Luca Bianchi',
    done: 'true',
  },
]

class TodoTable extends React.Component {
  render() {
    return (
      <TableContainer id="todo-table-container" component={Paper}>
        <Table id="todo-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Attivita</TableCell>
              <TableCell align="right">Operatore</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.description}
                </TableCell>
                <TableCell align="right">{row.employee}</TableCell>
                <TableCell align="right">
                  <button>Svolgi</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
export default TodoTable
