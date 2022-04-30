import { GraphQLClient } from "graphql-request"
import { getSdk } from "../api"

const graphQlClient = new GraphQLClient(process.env.AIESEC_ENDPOINT!, {
  headers: {
    Authorization: process.env.AIESEC_TOKEN!,
  },
})

const client = getSdk(graphQlClient)

export default (token: string) => {
  const graphQlClient = new GraphQLClient(process.env.AIESEC_ENDPOINT!, {
    headers: {
      Authorization: token || process.env.AIESEC_TOKEN!,
    },
  })

  const client = getSdk(graphQlClient)
  return client
}

// export default client
