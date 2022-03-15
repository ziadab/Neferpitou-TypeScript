import { Request, Response, Router } from "express"
import TelegramService from "../services/telegram"

const router = Router()

router.post("/", async (req: Request, res: Response) => {
  const text = req.body["text"]
  await TelegramService.sendMarkdownMsg(
    text,
    parseInt(<string>process.env.ZIAD_CHAT_ID)
  )
  return res.end("ok")
})

export default router
