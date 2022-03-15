"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
// import { getSdk } from "../api/generated"
const client = new graphql_request_1.GraphQLClient(process.env.AIESEC_ENDPOINT, {
    headers: {
        Authorization: process.env.AIESEC_TOKEN,
    },
});
// const f = getSdk(client)
