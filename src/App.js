import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import './App.css'

import HorizontalNavBar from './components/HorizontalNavBar'
import ViewContainer from './components/ViewContainer'

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/77d47951e19546cac9111ea5c89ec041',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HorizontalNavBar />
        <ViewContainer />
      </div>
    </ApolloProvider>
  )
}

export default App
