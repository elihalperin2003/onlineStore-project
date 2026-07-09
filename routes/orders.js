import express from "express";

import { getOrders, checkout } from "../utils/functions.js";

const router = express.Router();

router.get("", async (req, res) => {
  const result = await getOrders();
  res.json({ seccuss: true, data: result });
});

router.post("/checkout", async (req, res) => {
  const result = await checkout(+req.query.customerId);
  res.json({ seccuss: true, data: result });
});

export default router;
