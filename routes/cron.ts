import { Router } from "express";
import dayjs from "dayjs";
import Client from "../clients/GraphQlClient";
import hubspot from "../api/hubspot";
import axios from "axios";

const sendMsg = `${process.env.TELEGRAM_LINK}/sendMessage`;

const router = Router();

router.get("/", async (req, res) => {
  const to = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const from = dayjs().subtract(5, "hours").format("YYYY-MM-DD HH:mm:ss");
  console.log({ to, from });
  const token: string = (req.query as any).token!;

  const data = await Client(token).getPeople({ to, from });
  console.log(data);

  if (data.people?.data?.length == 0) {
    await axios.post(sendMsg, {
      chat_id: parseInt(<string>process.env.ZIAD_CHAT_ID),
      text: `No ep's on hubspot hihihi`,
    });
    return res.send("Ok");
  }

  const { success, error } = await hubspot(data);
  if (error.length > 0) {
    await axios.post(sendMsg, {
      chat_id: parseInt(<string>process.env.ZIAD_CHAT_ID),
      text: `The following users already exist in hubspot ${error.toString()}`,
    });
    return res.send("Ok");
  }

  await axios.post(sendMsg, {
    chat_id: parseInt(<string>process.env.ZIAD_CHAT_ID),
    text: `${success.length} added to HubSpot`,
  });

  res.status(200).send("Ok");
});

router.post("/", async (req, res) => {
  const to = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const from = dayjs().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss");

  const data = await Client("").getPeople({ to, from });

  if (data.people?.data?.length == 0) {
    await axios.post(sendMsg, {
      chat_id: -798569661,
      text: `No ep's on hubspot hihihi`,
    });
    return res.send("Ok");
  }

  const { success, error } = await hubspot(data);
  if (error.length > 0) {
    await axios.post(sendMsg, {
      chat_id: -798569661,
      text: `The following users already exist in hubspot ${error.toString()}`,
    });
    return res.send("Ok");
  }

  await axios.post(sendMsg, {
    chat_id: -798569661,
    text: `${success.length} added to HubSpot`,
  });

  res.status(200).send("Ok");
});
export default router;
