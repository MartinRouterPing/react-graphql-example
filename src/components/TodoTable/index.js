import React, { useState, useEffect } from 'react'
import * as Constants from '../../api/constants'
import axios from 'axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

//TODO: riunire tutte le dichiarazioni un una sola

const TodoTable = () => {
  const [data, setData] = useState({ todos: [] })
  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GRAPHQL_QUERY,
      })
      const result = queryResult.data.data
      setData(result)
      // console.log('this is data.todos:')
      // console.log(data.todos)
    }
    fetchData()
  }, [])

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
