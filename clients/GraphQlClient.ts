import { GraphQLClient } from "graphql-request"
import { getSdk } from "../api/generated"

const client = new GraphQLClient(process.env.AIESEC_ENDPOINT!, {
  headers: {
    Authorization: process.env.AIESEC_TOKEN!,
  },
})

const f = getSdk(client)
