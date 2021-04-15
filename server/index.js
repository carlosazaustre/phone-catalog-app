"use strict";

const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/phone-catalog";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
  res.json({ status: "running", date: Date.now() });
});
app.get("/api/phones", (req, res) => {
  res.json({ phones: [] });
});
app.get("/api/phone/:id", (req, res) => {
  const { id } = req.params;
  res.json({ phone: id });
});

(async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("💽 DB is running and the connection is established");

    await server.listen(PORT);
    console.log(`🚀 API Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error(err.message);
  }
})();
