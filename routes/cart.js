import express from "express";

import { getCart, addProduct } from "../utils/functions.js";

const router = express.Router();

router.get("", async (req, res) => {
  const result = await getCart(+req.query.customerId);
  res.json({ seccuss: true, data: result });
});

router.post("/items", async (req, res) => {
  await addProduct(req.body);
  res.json({ seccuss: true, message: "product added to the cart" });
});

export default router;
