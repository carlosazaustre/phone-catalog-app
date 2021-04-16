"use strict";

const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PKG = require("./package.json");

const phoneRouter = require("./phones/routes");

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/phone-catalog";

const app = express();
const server = http.createServer(app);

function handleError(err, req, res, next) {
  console.error(`ERROR: ${err.message}`);
  console.error(err.stack);

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message });
  }

  res.status(500).send({ error: err.message });
}

app.use(cors());
app.use(handleError);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/", (req, res) => {
  res.json({
    status: "API server is running",
    version: PKG.version,
    date: new Date().toLocaleString("es"),
  });
});
app.use("/api", phoneRouter);

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
