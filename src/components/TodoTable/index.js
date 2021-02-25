import React, { useState, useEffect } from 'react'
import * as Constants from '../../api/constants'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { useQuery } from '@apollo/client'

//TODO: riunire tutte le dichiarazioni un una sola

const TodoTable = (props) => {
  const { query } = props
  const [todoData, setTodoData] = useState({ todos: [] })

  console.log(query)
  const { loading, error, data } = useQuery(Constants.GQL_QUERY_DONE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)
  //console.log(todoData)
  // console.log(loading)
  // console.log(error)
  return (
    <TableContainer id="todo-table-container" component={Paper}>
      <Table id="todo-table" aria-label="simple table">
        <TableHead>
          <TableRow className="bg-red">
            <TableCell style={{ color: 'white' }} align="right">
              Attivita
            </TableCell>
            <TableCell className="fg-white" align="right">
              Operatore
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.todos.length > 0 &&
            data.todos.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.task}
                </TableCell>
                <TableCell align="right">{row.user.firstname}</TableCell>
                <TableCell align="right">
                  <Button
                    classes={{ root: 'done-button' }}
                    className="bg-navy-dark fg-white done-button"
                  >
                    Svolgi
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodoTable
