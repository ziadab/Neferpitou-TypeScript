import { Router } from "express";
// import redisClient from "../services/redis";
import VogueClient from "../clients/VogueClient";
import { getSeasonShows, fashionShows } from "../vogue";
import chunk from "lodash.chunk";
import TelegramService from "../services/telegram";

const router = Router();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const randIntFromRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

router.get("/", async (req, res) => {
  const users = [
    { chat_id: 513915705, name: "Ziad" },
    { chat_id: 1581070212, name: "Mouna" },
    { chat_id: 5490284002, name: "Meryem" },
    { chat_id: 1862064937, name: "Knour" },
  ];

  const vogueClient = (await VogueClient.getSeasons()).allSeasons!;
  const randomSeason = randIntFromRange(0, vogueClient.Season!.length - 1);
  const slug = vogueClient.Season![randomSeason].slug;

  const shows = await getSeasonShows(slug);
  const randomShow = randIntFromRange(
    0,
    // @ts-ignore
    shows.data.data.allContent?.Content!.length - 1
  );

  const fashionShow = await fashionShows(
    shows.data.data.allContent?.Content![randomShow]?.slug!
  );
  const data =
    fashionShow.data.data.fashionShowV2?.galleries?.collection?.slidesV2?.slide?.map(
      (show) => {
        return {
          type: "photo",
          // @ts-ignore
          media: show?.photosTout.url,
        };
      }
    );
  const chunkedData = chunk(data, 10);
  users.forEach((user) => {
    TelegramService.sendMessage(
      fashionShow.data.data.fashionShowV2?.title!,
      user.chat_id
    );
    chunkedData.forEach((mediaGroup) => {
      TelegramService.sendMediaGroupNotify(mediaGroup!, user.chat_id);
      sleep(1000);
    });
    sleep(1000);
  });
  return res.json({ data: chunkedData });
});

export default router;
