import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import './styles.css'

class AddTodoForm extends React.Component {
  render() {
    return (
      <div id="add-todo-form-container" className="p-2">
        <form noValidate autoComplete="off">
          <div className="inner-form">
            <TextField required id="standard-required" label="Descrizione" />
            <Select value="Melchiorre" required>
              <MenuItem value={'Melchiorre'}>Melchiorre</MenuItem>
              <MenuItem value={'Baldassarre'}>Baldassarre</MenuItem>
              <MenuItem value={'Gaspare'}>Gaspare</MenuItem>
            </Select>
          </div>
        </form>
      </div>
    )
  }
}
export default AddTodoForm
