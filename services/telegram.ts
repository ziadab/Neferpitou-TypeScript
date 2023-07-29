import axios from "axios";

class TelegramService {
  static sendMsgUrl: string = `${process.env.TELEGRAM_LINK}/sendMessage`;
  static forwardMessageUrl: string = `${process.env.TELEGRAM_LINK}/forwardMessage`;
  static sendNotification: string = `${process.env.NOTIFY_LINK}/sendMessage`;
  static sendMediaGroup: string = `${process.env.TELEGRAM_LINK}/sendMediaGroup`;

  static async sendMediaGroupNotify(media: any[], chat_id: number) {
    return await axios
      .post(this.sendMediaGroup, {
        chat_id,
        media,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async sendNotify(text: string) {
    return await axios
      .post(this.sendNotification, {
        chat_id: parseInt(process.env.ZIAD_CHAT_ID!),
        text,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async sendMarkdownMsg(text: string, chat_id: number) {
    return await axios
      .post(this.sendMsgUrl, {
        chat_id,
        text,
        parse_mode: "MarkdownV2",
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async sendHTMLMsg(text: string, chat_id: number) {
    return await axios
      .post(this.sendMsgUrl, {
        chat_id,
        text,
        parse_mode: "HTML",
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async sendMessage(text: string, chat_id: number) {
    return await axios
      .post(this.sendMsgUrl, {
        chat_id,
        text,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async forwardMessage(
    from_chat_id: number,
    chat_id: number,
    message_id: number
  ) {
    return await axios
      .post(this.forwardMessageUrl, {
        from_chat_id,
        chat_id,
        message_id,
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default TelegramService;
