import { Router } from "express";
import TelegramService from "../services/telegram";
import getCompliment from "../utils/getCompliment";
import {
  getCustumeCompliment,
  getZiadCompliment,
} from "../utils/getCustomeCompliments";
const router = Router();

router.post("/", async (req, res) => {
  const users = [
    { chat_id: 513915705, name: "Ziad" },
    { chat_id: 1058010537, name: "Hanae" },
    { chat_id: 1581070212, name: "Mouna" },
    { chat_id: 5490284002, name: "Meryem" },
    { chat_id: 5360452810, name: "Malak" },
  ];

  users.map(async (user) => {
    const compliment =
      Math.random() > 0.6
        ? await getCompliment()
        : user.name === "Ziad"
        ? getZiadCompliment()
        : getCustumeCompliment();
    await TelegramService.sendMessage(compliment, user.chat_id);
  });
  return res.status(200).send("OK");
});

export default router;
