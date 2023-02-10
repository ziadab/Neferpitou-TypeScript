import { Router, Request } from "express";
import Client from "../clients/GraphQlClient";

interface UpdateQuery {
  startDate: string;
  endDate: string;
  token: string;
}

const router = Router();

router.get("/", async (req: Request<{}, {}, {}, UpdateQuery>, res) => {
  const { startDate, endDate, token } = req.query;
  if (token == "" || token == undefined)
    return res.status(400).send("No token provided");

  if (!startDate || !endDate)
    return res
      .status(400)
      .send("startDate or endDate has not been send to me :'(");
});

export default router;
