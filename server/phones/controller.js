"use strict";

const phoneRepository = require("./repository");

async function getPhones(req, res, next) {
  try {
    const phones = await phoneRepository.listAllPhones();
    res.status(200).json({ phones });
  } catch (error) {
    next(error);
  }
}

async function getPhoneById(req, res, next) {
  try {
    const { id } = req.params;
    const phone = await phoneRepository.listUniquePhone(id);
    res.json({ phone });
  } catch (error) {
    next(error);
  }
}

async function postPhone(req, res, next) {
  console.log("POST", req);
  try {
    const { image, title, description, color, price } = req.body;
    const phone = await phoneRepository.savePhone({
      image,
      title,
      description,
      color,
      price,
    });
    res.json({ phone });
  } catch (error) {
    next(error);
  }
}

async function putPhone(req, res, next) {
  const { id } = req.params;
  const data = req.body;
  const phone = await phoneRepository.updatePhone(id, data);
  res.json({ message: `Phone id: ${id} was updated`, phone });
}

async function deletePhone(req, res, next) {
  const { id } = req.params;
  await phoneRepository.removePhone(id);
  res.json({ message: `Phone id: ${id} was removed` });
}

module.exports = {
  getPhones,
  getPhoneById,
  postPhone,
  putPhone,
  deletePhone,
};
