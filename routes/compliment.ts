import { Router } from "express";
import updateCron from "../api/updateCron";
import TelegramService from "../services/telegram";
import getCompliment from "../utils/getCompliment";
import {
  getCustumeCompliment,
  getZiadCompliment,
} from "../utils/getCustomeCompliments";

const router = Router();

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

router.post("/", async (req, res) => {
  const users = [
    { chat_id: 513915705, name: "Ziad" },
    { chat_id: 1058010537, name: "Hanae" },
    { chat_id: 1581070212, name: "Mouna" },
    { chat_id: 5490284002, name: "Meryem" },
    { chat_id: 5360452810, name: "Malak" },
    { chat_id: 1862064937, name: "Knour" },
    { chat_id: 5755632631, name: "Mimi the cat" },
  ];

  users.map(async (user) => {
    const compliment =
      Math.random() > 0.65
        ? await getCompliment()
        : user.name === "Ziad"
        ? getZiadCompliment()
        : getCustumeCompliment();
    await TelegramService.sendMessage(compliment, user.chat_id);
    await TelegramService.sendNotify(`${user.name}: ${compliment}`);
  });

  const hours = random(0, 23);
  const minutes = random(0, 59);

  await updateCron(hours, minutes);

  TelegramService.sendNotify(
    `Next compliment will be sent at ${hours}:${minutes}`
  );

  return res.status(200).send("OK");
});

export default router;
