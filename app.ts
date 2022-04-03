import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import githubHandler from "./routes/githubWebhook"
import hubspotHundler from "./routes/hubspot"
import telegramHandler from "./routes/telegram"
import cronHandler from "./routes/cron"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/github", githubHandler)
app.use("/hubspot", hubspotHundler)
app.use("/telegram", telegramHandler)
app.use("/cron", cronHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
