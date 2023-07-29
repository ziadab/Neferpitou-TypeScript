import { Router } from "express";
import redisClient from "../services/redis";
import VogueClient from "../clients/VogueClient";
import { getSeasonShows } from "../vogue";

const router = Router();

router.get("/", async (req, res) => {
  const vogueClient = (await VogueClient.getSeasons()).allSeasons!;
  //@ts-ignore
  const slug = vogueClient.Season[0].slug;
  const shows = await getSeasonShows(slug);
  res.status(200).send(shows.data.data.allContent);
});

export default router;
