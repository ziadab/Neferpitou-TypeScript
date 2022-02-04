import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import githubHandler from "./routes/githubWebhook"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/github", githubHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
