import fs from "fs";
import gql from "graphql-tag";
import request from "../requests";
import {
  GetFashionShowCollectionQuery,
  GetSeasonShowsQuery,
  GetSeasonsQuery,
} from "../api/vogue";

const getSeasonsQuery = fs.readFileSync("vogue/gql/getSeasons.gql", "utf-8");
const getSeasonShowsQuery = fs.readFileSync(
  "vogue/gql/getSeasonShows.gql",
  "utf-8"
);
const fashionShowQuery = fs.readFileSync("vogue/gql/FashionShow.gql", "utf-8");

const getSeasons = () => {
  const query = gql`
    ${getSeasonsQuery}
  `;
  return request.post<{ data: GetSeasonsQuery }>("", {
    query: query.loc?.source.body,
  });
};
const getSeasonShows = (season: string) => {
  const query = gql`
    ${getSeasonShowsQuery}
  `;
  return request.post<{ data: GetSeasonShowsQuery }>("", {
    query: query.loc?.source.body,
    variables: {
      season,
    },
  });
};
const fashionShows = (slug: string) => {
  const query = gql`
    ${fashionShowQuery}
  `;
  return request.post<{ data: GetFashionShowCollectionQuery }>("", {
    query: query.loc?.source.body,
    variables: {
      slug,
    },
  });
};

export { getSeasons, getSeasonShows, fashionShows };
