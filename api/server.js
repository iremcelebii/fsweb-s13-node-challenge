const express = require("express");
const server = express();

const projectRouter = require("./projects/projects-router");

server.use(express.json());
server.use("/api/projects", projectRouter);

server.use((req, res) => {
  res.status(400).send("Aradığınız adres bulunamadı");
});

server.use((err, req, res, next) => {
  let status = err.status || 500;
  res.status(status).json({ message: "işlem yapılamadı" });
});

module.exports = server;
