import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import githubHandler from "./routes/githubWebhook";
import hubspotHundler from "./routes/hubspot";
import telegramHandler from "./routes/telegram";
import cronHandler from "./routes/cron";
import typeformHandler from "./routes/typeform";
import complimentHandler from "./routes/compliment";
import updateHandler from "./routes/update";
import vogueHandler from "./routes/vogue";
import redisClient from "./services/redis";

dotenv.config();

redisClient.on("connect", () => {
  console.log("Redis connected");
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/github", githubHandler);
app.use("/hubspot", hubspotHundler);
app.use("/telegram", telegramHandler);
app.use("/cron", cronHandler);
app.use("/typeform", typeformHandler);
app.use("/compliment", complimentHandler);
app.use("/vogue", vogueHandler);
app.use("/update", updateHandler);
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
