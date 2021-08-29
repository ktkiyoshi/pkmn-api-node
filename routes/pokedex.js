const express = require('express');
const router = express.Router();
const pokedex = require('../services/pokedex');

/* GET pokedex */
router.get('/v1/zenkoku', async function(req, res, next) {
  try {
    res.json(await pokedex.getPokedex(req.query.page));
  } catch (err) {
    console.error(`Error while getting pokedex`, err.message);
    next(err);
  }
});

/* GET names */
router.get('/v1/names', async function(req, res, next) {
  try {
    res.json(await pokedex.getNames(req.query.page));
  } catch (err) {
    console.error(`Error while getting names`, err.message);
    next(err);
  }
});

module.exports = router;
