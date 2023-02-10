import { Router } from "express";
import TelegramService from "../services/telegram";
import getCompliment from "../utils/getCompliment";
const router = Router();

router.post("/", async (req, res) => {
  const users = [
    { chat_id: 513915705, name: "Ziad" },
    { chat_id: 1058010537, name: "Hanae" },
  ];

  users.map(async (user) => {
    const compliment = await getCompliment();
    await TelegramService.sendMessage(compliment, user.chat_id);
  });
  return res.status(200).send("OK");
});

export default router;
