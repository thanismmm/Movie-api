const express = require("express");
const {
  movieUpdate,
  movieDelete,
  movieCreate,
  MovieIndex,
  movieFind,
} = require("../Controllers/movies.controller");

const router = express.Router();

//get
router.get("/", MovieIndex);

//find
router.get("/:id", movieFind);

//Create
router.post("/", movieCreate);

//update
router.put("/:id", movieUpdate);

//delete
router.delete("/:id", movieDelete);

module.exports = router;
