import { Router } from "express";
import redisClient from "../services/redis";
import VogueClient from "../clients/VogueClient";

const router = Router();

router.get("/", async (req, res) => {
  const vogueClient = await VogueClient.getSeasons();
  res.status(200).json(vogueClient);
});

export default router;
