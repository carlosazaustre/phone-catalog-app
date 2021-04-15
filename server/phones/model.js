"use strict";

const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const PhoneSchema = new Schema({
  id: { type: String, unique: true, default: uuidv4, index: true },
  image: { type: String, default: "https://via.placeholder.com/150" },
  title: { type: String },
  description: { type: String },
  color: { type: String },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Phone", PhoneSchema);
