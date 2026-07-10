import express from "express";

import { getOrders, checkout } from "../utils/functions.js";

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const result = await getOrders(res, req.body.customerId);
    res.json({ seccuss: true, data: result });
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/checkout", async (req, res) => {
  try {
    const result = await checkout(res, req.query.customerId);
    res.json({ seccuss: true, data: result });
  } catch (err) {
    console.log(err.message);
  }
});

export default router;
