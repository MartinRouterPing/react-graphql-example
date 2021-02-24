export const GRAPHQL_API =
  'https://fakeql.com/graphql/77d47951e19546cac9111ea5c89ec041'
export const GRAPHQL_QUERY = `
query todos {
    todos {
      id
      task
      user {
        firstname
      }
      done
    }
  }
`
