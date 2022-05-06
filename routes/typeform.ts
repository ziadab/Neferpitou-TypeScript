import { Router } from "express"
import { writeFileSync } from "fs"
import pick from "lodash.pick"
import TelegramService from "../services/telegram"
import TelegramMessageBuilder from "../utils/TypeformMessageBuilder"

const router = Router()

router.post("/", async (req, res) => {
  const data = req.body
  const fields = data.form_response.definition.fields.map((el: any) =>
    pick(el, ["id", "title"])
  )
  const tempAnswers = data.form_response.answers.map(
    (el: { [x: string]: any; field: { id: any }; type: string }) => {
      const id = el.field.id
      const key = el.type.split(" ").join("_")
      const answer = el[key as keyof typeof el]

      return {
        id,
        answer,
        type: el.type,
      }
    }
  )

  const answers = fields.map((item: any, i: string | number) =>
    Object.assign({}, item, tempAnswers[i])
  )

  // @ts-ignore
  const dataa = TelegramMessageBuilder(answers)
  TelegramService.sendHTMLMsg(dataa, parseInt(process.env.TYPEFORM_CHAT_ID!))

  res.send("Ok")
})

export default router
