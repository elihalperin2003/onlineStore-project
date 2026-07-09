import express from "express";

import { getProducts } from "./utils/functions.js";
import cartRouter from "./routes/cart.js";

const PORT = process.env.PORT;

const server = express();

server.use(express.json());

server.use("/cart", cartRouter);

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

server.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
