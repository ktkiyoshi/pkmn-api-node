const express = require('express');
const router = express.Router();
const types = require('../services/types');

/* GET types */
router.get('/v1/types', async function(req, res, next) {
  try {
    res.json(await types.getTypes(req.query.page));
  } catch (err) {
    console.error(`Error while getting types`, err.message);
    next(err);
  }
});

/* GET relations */
router.get('/v1/relations', async function(req, res, next) {
  try {
    res.json(await types.getRelations(req.query.page));
  } catch (err) {
    console.error(`Error while getting relations`, err.message);
    next(err);
  }
});

module.exports = router;
