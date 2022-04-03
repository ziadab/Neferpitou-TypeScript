import { Router } from "express"
import { GoogleSpreadsheet } from "google-spreadsheet"
import dayjs from "dayjs"
import client from "../clients/GraphQlClient"
import hubspotClient from "../clients/HubSpotClient"
import parsePhoneNumber from "libphonenumber-js"

const router = Router()
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID)

router.post("/", async (req, res) => {
  const to = dayjs().format("YYYY-MM-DD HH:mm:ss")
  const from = dayjs().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss")

  const data = await client.getPeople({ from, to })
  if (data.people?.data == null) {
  }
})

router.get("/", async (req, res) => {
  // const data = await hubspotClient.crm.contacts.getAll()
  const epsExistant = []

  // res.status(200).json(data)
  const to = dayjs().format("YYYY-MM-DD HH:mm:ss")
  const from = dayjs().subtract(5, "day").format("YYYY-MM-DD HH:mm:ss")

  const data = await client.getPeople({ to, from })
  const results = data.people?.data?.map(async (el) => {
    const phone = parsePhoneNumber(
      el?.contact_detail?.phone!,
      "MA"
    )?.formatInternational()!
    const program_interested_in =
      el?.person_profile?.selected_programmes?.length == 0
        ? "0"
        : el?.person_profile?.selected_programmes![0]?.toString()
    const contact = {
      properties: {
        expa_id: el?.id!,
        email: el?.email!,
        firstname: el?.first_name!,
        lastname: el?.last_name!,
        hubspot_owner_id: "296102844",
        hs_lead_status: "NOT_CONTACTED",
        program_interested_in: program_interested_in!,
        phone,
      },
    }
    hubspotClient.crm.contacts.basicApi
      .create(contact)
      .catch((err) => epsExistant.push(el?.id))
  })

  const thla = Promise.all(results!)
  thla.catch((err) => {
    console.log("uwuwuwuwuwu")
    console.log(err.body.message)
  })
  res.json(thla)
})
export default router
