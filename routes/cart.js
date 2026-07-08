import express from "express";

import { getCart } from "../utils/functions.js";

const router = express.Router();

router.get("", async (req, res) => {
  const result = await getCart(+req.query.customerId);
  res.json({ seccuss: true, data: result });
});

export default router;
