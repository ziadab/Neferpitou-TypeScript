import { Router } from "express";
import TelegramService from "../services/telegram";

const router = Router();

router.post("/", async (req, res) => {
  //   console.log(req.body.message);
  const fullname = `${req.body.message.from.first_name} ${req.body.message.from.last_name} (@${req.body.message.from.username})`;
  const message = req.body.message.text;

  if (message == undefined) {
    TelegramService.forwardMessage(
      req.body.message.from.id,
      parseInt(process.env.ZIAD_CHAT_ID!),
      req.body.message.message_id
    );
    return res.status(200).send("Ok");
  }

  TelegramService.sendMessage(
    `${fullname}: ${message}`,
    parseInt(process.env.ZIAD_CHAT_ID!)
  );

  return res.status(200).send("Ok");
});

export default router;
