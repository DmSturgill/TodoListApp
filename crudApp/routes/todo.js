const express = require("express");
const router = express.Router();

const todoscontroller = require("../app/api/controllers/todos");



router.get("/",todoscontroller.getAll);
router.get("/:todoID",todoscontroller.get);

router.post("/create",todoscontroller.create);

module.exports = router;