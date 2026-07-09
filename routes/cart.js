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
  try {
    const result = await addProduct(res, req.body);
    if (!result) {
      throw new Error();
    }
    res.json({ seccuss: true, message: "product added to the cart" });
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("/items/:productId", async (req, res) => {
  try {
    const result = await deleteProduct(
      res,
      req.params.productId,
      req.body.customerId,
    );
    if (!result) {
      throw new Error();
    }
    res.json({ seccuss: true, message: "product deleted from the cart" });
  } catch (err) {
    console.log(err.message);
  }
});
export default router;
