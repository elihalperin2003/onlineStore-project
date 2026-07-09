import express from "express";

import { getOrders } from "../utils/functions.js";

const router = express.Router();

router.get("", async (req, res) => {
  const result = await getOrders();
  res.json({ seccuss: true, data: result });
});

export default router;
