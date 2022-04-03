import { Router } from "express"

const router = Router()

router.post("/", async (req, res) => {
  console.log(req.body)
  res.status(200).send("ok")
})

export default router
