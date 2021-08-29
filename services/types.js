const db = require('./db');
const helper = require('../helper');

async function getTypes(){
  const rows = await db.query(
    `SELECT id, name, short_name, color FROM types`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function getRelations(){
  const rows = await db.query(
    `SELECT attack_id, defense_id, effect_rate FROM type_relations`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getTypes,
  getRelations
}
