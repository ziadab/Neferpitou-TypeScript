import { Request, Response, Router } from "express"
import CryptoJs from "crypto"
import TelegramService from "../services/telegram"

const secret = "FE0odrvwOVaUgIw0w4g6pi_9"

const router = Router()

router.post("/", async (req: Request, res: Response) => {
  const hash = CryptoJs.createHmac("sha256", secret)
    .update(JSON.stringify(req.body))
    .digest("hex")

  if (req.headers["x-hub-signature-256"] != `sha256=${hash}`)
    return res.status(401).json({ message: "stfu u wanna be my slut" })

  if (req.headers["x-github-event"] == "push") {
    const msg = `${req.body.pusher.name} has commited at ${req.body.ref} with *${req.body.head_commit.message}*`
    await TelegramService.sendMarkdownMsg(
      msg,
      parseInt(<string>process.env.ZIAD_CHAT_ID)
    )

    return res.end("ok")
  } else if ("ref_type" in req.body) {
    const msg = `${req.body.sender.login} has pushed a new branch with state ${req.headers["x-github-event"]} with name *${req.body.ref}*`
    await TelegramService.sendMarkdownMsg(
      msg,
      parseInt(<string>process.env.ZIAD_CHAT_ID)
    )
    return res.end("ok")
  }
})

export default router
