import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class FilterByEmployeName extends React.Component {
  render() {
    return (
      <form>
        <label style={{ display: 'block', width: '90%' }}>
          Attività da completare
        </label>
        <Select
          style={{ width: '90%' }}
          id="select-employee"
          value="Melchiorre"
          onChange={this.handleChange}
        >
          <MenuItem value={'Melchiorre'}>Melchiorre</MenuItem>
          <MenuItem value={'Baldassarre'}>Baldassarre</MenuItem>
          <MenuItem value={'Gaspare'}>Gaspare</MenuItem>
        </Select>
      </form>
    )
  }
}
export default FilterByEmployeName
