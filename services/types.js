const db = require('./db');
const helper = require('../helper');

async function getTypes(){
  const rows = await db.query(
    `SELECT id, name, short_name, color FROM types`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {};

  return {
    data,
    meta
  }
}

async function getRelations(){
  const rows = await db.query(
    `SELECT attack_id, defense_id, effect_rate FROM type_relations`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {};

  return {
    data,
    meta
  }
}

module.exports = {
  getTypes,
  getRelations
}
