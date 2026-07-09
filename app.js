import express from "express";

import { getProducts, getBalance } from "./utils/functions.js";
import cartRouter from "./routes/cart.js";
import ordersRouter from "./routes/orders.js";

const PORT = process.env.PORT;

const server = express();

server.use(express.json());

server.use("/cart", cartRouter);
server.use("/orders", ordersRouter);

server.get("/", (req, res) => {
  res.json({ seccuss: true, message: "The server running now" });
});

server.get("/health", (req, res) => {
  res.json({ seccuss: true, message: "status: healthy" });
});

server.get("/products", async (req, res) => {
  const result = await getProducts();
  res.json({ seccuss: true, data: result });
});

server.get("/account/balance", async (req, res) => {
  const result = await getBalance(+req.query.customerId);
  res.json({ seccuss: true, data: result });
});

server.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
