import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class FilterByEmployeName extends React.Component {
  render() {
    return (
      <form>
        <Select
          className="mb-2"
          style={{ width: '90%', 'background-color': 'white' }}
          id="select-employee"
          value=""
          onChange={this.handleChange}
        >
          <MenuItem value={'Melchiorre'}>Mario Rossi</MenuItem>
          <MenuItem value={'Baldassarre'}>Luca Bianchi</MenuItem>
          <MenuItem value={'Gaspare'}>Gaspare</MenuItem>
        </Select>
      </form>
    )
  }
}
export default FilterByEmployeName
