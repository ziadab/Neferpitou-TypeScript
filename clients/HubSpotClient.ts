import * as hubspot from "@hubspot/api-client";

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_TOKEN,
});

export default hubspotClient;
