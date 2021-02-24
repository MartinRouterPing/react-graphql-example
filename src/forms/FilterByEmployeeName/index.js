import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class FilterByEmployeName extends React.Component {
  render() {
    return (
      <form>
        <label className="mb-1" style={{ display: 'block', width: '90%' }}>
          Attività da completare
        </label>
        <Select
          className="mb-2"
          style={{ width: '90%', 'background-color': 'white' }}
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
