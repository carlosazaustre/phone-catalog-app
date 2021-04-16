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

async function savePhone(data) {
  console.log(data);
  const phone = new Phone(data);
  const phoneSaved = await phone.save();
  return phoneSaved;
}

async function updatePhone(id, data) {
  const filter = { id };
  const phoneUpdated = await Phone.findOneAndUpdate(filter, data);
  return phoneUpdated;
}

async function removePhone(id) {
  await Phone.findOneAndRemove(id);
  return true;
}

module.exports = {
  listAllPhones,
  listUniquePhone,
  savePhone,
  updatePhone,
  removePhone,
};
