import axios from "axios"

class TelegramService {
  static sendMsgUrl: string = `${process.env.TELEGRAM_LINK}/sendMessage`

  static async sendMarkdownMsg(text: string, chat_id: number) {
    return await axios
      .post(this.sendMsgUrl, {
        chat_id,
        text,
        parse_mode: "MarkdownV2",
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export default TelegramService
