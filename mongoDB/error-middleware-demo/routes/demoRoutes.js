const express = require("express");
const router = express.Router();
const CustomError = require("../utils/customError");

router.get("/success", (req, res) => {
  res.json({
    success: true,
    message: "Everything is working!"
  });
});

router.get("/error", (req, res, next) => {
  return next(new CustomError("Custom route error!", 400));
});

module.exports = router;