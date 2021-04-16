const { Router } = require("express");
const phoneController = require("./controller");

const router = new Router();

router.get("/phones", phoneController.getPhones);
router.get("/phone/:id", phoneController.getPhoneById);
router.post("/phone", phoneController.postPhone);
router.put("/phone", phoneController.putPhone);
router.delete("/phone", phoneController.deletePhone);

module.exports = router;
