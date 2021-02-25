import { useQuery, gql } from '@apollo/client'

export const GRAPHQL_API =
  'https://fakeql.com/graphql/77d47951e19546cac9111ea5c89ec041'

export const GRAPHQL_QUERY = `
query todos {
  todos(where: {done_eq: false}) {
    id
    task
    user {
      firstname
    }
    done
  }
}

`
export const GQL_QUERY_TODO = gql`
  query todos {
    todos(where: { done_eq: false }) {
      id
      task
      user {
        firstname
      }
      done
    }
  }
`

export const GQL_QUERY_DONE = gql`
  query todos {
    todos(where: { done_eq: true }) {
      id
      task
      user {
        firstname
      }
      done
    }
  }
`

export const generateDoneMutation = (id) => {
  let mutation = `mutation {
  updateTodo(id: "${id}", input: {done: true}){done}
}`
  return mutation
}
