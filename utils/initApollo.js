import { ApolloClient, createNetworkInterface } from 'react-apollo'

if (!process.browser) {
  eval('require("isomorphic-fetch")')
}

const SIMPLE_ENDPOINT = 'https://api.graphcms.com/simple/v1/cj8rf4xll0j5n0122iyggb6j9'

let apolloClient = null

function create(initialState) {

  const networkInterface = createNetworkInterface({
    uri: SIMPLE_ENDPOINT,
    opts: { // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin'
    },
    dataIdFromObject: o => o.id,
  })

  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface,
  })
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
