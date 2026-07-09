import express from "express";

import { getCart, addProduct, deleteProduct } from "../utils/functions.js";

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const result = await getCart(res, +req.query.customerId);
    res.json({ seccuss: true, data: result });
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/items", async (req, res) => {
  await addProduct(req.body);
  res.json({ seccuss: true, message: "product added to the cart" });
});

router.delete("/items/:productId", async (req, res) => {
  await deleteProduct(req.body.productId, +req.query.productId);
  res.json({ seccuss: true, message: "product deleted from the cart" });
});

export default router;
