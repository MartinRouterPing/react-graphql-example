import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import * as Constants from './api/constants'

import HorizontalNavBar from './components/HorizontalNavBar'
import ViewContainer from './components/ViewContainer'
import { SettingsSystemDaydream } from '@material-ui/icons'

function App() {
  const [data, setData] = useState({ todos: [] })

  useEffect(() => {
    const fetchData = async () => {
      const queryResult = await axios.post(Constants.GRAPHQL_API, {
        query: Constants.GRAPHQL_QUERY,
      })
      const result = queryResult.data.data
      setData({ todos: result.todos })
    }

    fetchData()
  }, [])
  return (
    <div className="App">
      <HorizontalNavBar />
      <ViewContainer />
    </div>
  )
}

export default App
