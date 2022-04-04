import { Router } from "express"
// import { GoogleSpreadsheet } from "google-spreadsheet"
import dayjs from "dayjs"
import client from "../clients/GraphQlClient"
import hubspot from "../api/hubspot"
import axios from "axios"
import hubspotClient from "../clients/HubSpotClient"

const sendMsg = `${process.env.TELEGRAM_LINK}/sendMessage`
// console.log(sendMsg)
const router = Router()
// const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID)

// router.post("/", async (req, res) => {
//   const to = dayjs().format("YYYY-MM-DD HH:mm:ss")
//   const from = dayjs().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss")

//   const data = await client.getPeople({ from, to })
//   if (data.people?.data == null) {
//   }
// })

router.post("/", async (req, res) => {
  const to = dayjs().format("YYYY-MM-DD HH:mm:ss")
  const from = dayjs().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss")

  const data = await client.getPeople({ to, from })

  if (data.people?.data?.length == 0) {
    await axios.post(sendMsg, {
      chat_id: -798569661,
      text: `No ep's on hubspot hihihi`,
    })
    return res.send("Ok")
  }

  const { success, error } = await hubspot(data)
  if (error.length > 0) {
    await axios.post(sendMsg, {
      chat_id: -798569661,
      text: `The following users already exist in hubspot ${error.toString()}`,
    })
    return res.send("Ok")
  }

  await axios.post(sendMsg, {
    chat_id: -798569661,
    text: `${success.length} added to HubSpot`,
  })

  res.status(200).send("Ok")
})
export default router
