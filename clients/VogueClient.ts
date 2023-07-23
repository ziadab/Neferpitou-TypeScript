import { GraphQLClient } from "graphql-request";
import { getSdk } from "../api/vogue";

const graphQlClient = new GraphQLClient("https://graphql.vogue.com/graphql", {
  headers: {
    "Content-Type": "application/json",
    Host: "graphql.vogue.com",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  },
});

const client = getSdk(graphQlClient);
export default client;
