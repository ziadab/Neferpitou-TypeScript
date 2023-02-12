import { Router, Request } from "express";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Client from "../clients/GraphQlClient";
import creds from "../client_secret.json";
import TelegramService from "../services/telegram";

const programMap = {
  7: "GV",
  8: "GTa",
  9: "GTe",
};

interface UpdateQuery {
  from: string;
  to: string;
  token: string;
}

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

const router = Router();

router.get("/", async (req: Request<{}, {}, {}, UpdateQuery>, res) => {
  const { from, to, token } = req.query;
  if (token == "" || token == undefined)
    return res.status(400).send("No token provided");

  if (!from || !to)
    return res.status(400).send("from or to has not been send to me :'(");

  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();

  try {
    const req = await Client(token).getPeople({ to, from });
    if (req.people?.data?.length == 0 || req.people?.data == undefined)
      return res.status(400).send("No eps lil2asaf");

    const data = req.people?.data?.map((person) => {
      const { person_profile, contact_detail, ...rest } = person!;
      let program_intersted_in;
      try {
        program_intersted_in =
          //@ts-ignore
          programMap[person_profile?.selected_programmes![0]];
      } catch (e) {
        program_intersted_in = "Not specified";
      }

      return {
        ...rest,
        phone: contact_detail?.phone,
        program_intersted_in,
      };
    });

    const newSheet = await doc.addSheet({
      title: `${from.split(":").join("-")} - ${to.split(":").join("-")}`,
      headerValues: Object.keys(data[0]),
    });

    //@ts-ignore
    await newSheet.addRows(data);

    TelegramService.sendMessage(
      `Update has been used by the following token: ${token}\nFrom: ${from}\nTo:${to}\nAdded: ${data.length} ep`,
      parseInt(process.env.ZIAD_CHAT_ID!)
    );

    return res.status(200).end(`Added: ${data.length} ep`);
  } catch (e) {
    //@ts-ignore
    TelegramService.sendMessage(
      //@ts-ignore
      `Error happen while update with the following parameters:\nFrom: ${from}\nTo:${to}\nToken: ${token}\nError: ${e.message}`,
      parseInt(process.env.ZIAD_CHAT_ID!)
    );
    //@ts-ignore
    return res.status(401).end(e.message);
  }
});

export default router;
