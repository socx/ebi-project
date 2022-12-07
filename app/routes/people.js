"use strict";
const controller = require("../controllers/people");
const router = require("express-promise-router")();

router
  .route("/family-tree/:personId")
  .get(controller.getFamilyTree)

module.exports = router;
