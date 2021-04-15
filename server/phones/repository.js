"use strict";

const Phone = require("./model");

async function listAllPhones() {
  const phones = await Phone.find({});
  return phones;
}

async function listUniquePhone(id) {
  const phone = await Phone.findOne({ id });
  return phone;
}

module.exports = {
  listAllPhones,
  listUniquePhone,
};
