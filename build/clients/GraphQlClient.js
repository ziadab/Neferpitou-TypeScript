"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const api_1 = require("../api");
const graphQlClient = new graphql_request_1.GraphQLClient(process.env.AIESEC_ENDPOINT, {
    headers: {
        Authorization: process.env.AIESEC_TOKEN,
    },
});
const client = (0, api_1.getSdk)(graphQlClient);
exports.default = client;
