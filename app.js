import express from "express";

const PORT = process.env.PORT;

const server = express();

server.get("/", (req, res) => {
  res.json({ seccuss: true, message: "The server running now" });
});

server.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
