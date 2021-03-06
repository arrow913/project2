const express = require("express");
const router = express.Router();
const deckController = require("../controllers/deck.js");

router.get("/deck/:name", deckController.showDeck);
router.get("/", deckController.index);
router.get("/api/deck", deckController.getById);
router.get("/name/:name", deckController.getByName);
router.post("/api/deck", deckController.create);
router.put("/:name", deckController.edit);
router.delete("/:name", deckController.delete);

module.exports = router;