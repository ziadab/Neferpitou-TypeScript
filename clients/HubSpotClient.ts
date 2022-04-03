import * as hubspot from "@hubspot/api-client"

const hubspotClient = new hubspot.Client({
  apiKey: process.env.HUBSPOT_API_KEY,
  developerApiKey: process.env.HUBSPOT_DEV_KEY,
})

export default hubspotClient
