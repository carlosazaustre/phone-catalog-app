"use strict";

const http = require("http");
const express = require("express");

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/phone-catalog";

const app = express();
const server = http.createServer(app);

server.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
