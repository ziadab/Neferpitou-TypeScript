import { Router } from "express";
import hubspotClient from "../clients/HubSpotClient";

const router = Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  res.status(200).send("ok");
});

router.get("/", async (req, res) => {
  const f = await hubspotClient.crm.objects.notes.basicApi.getPage();
  return res.json(f);
});

export default router;
