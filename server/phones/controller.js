"use strict";

const phoneRepository = require("./repository");

async function getPhones(req, res, next, err) {
  if (err) next(err);

  const phones = await phoneRepository.listAllPhones();
  res.json({ phones });
}

async function getPhoneById(req, res, next, err) {
  if (err) next(err);

  const { id } = req.params;
  const phone = await phoneRepository.listUniquePhone(id);
  res.json({ phone });
}

module.exports = {
  getPhones,
  getPhoneById,
};
