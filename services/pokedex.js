const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPokedex(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, poke_id, sub_id, full_name, form, height, weight, type1, type2,
     ability1, ability2, hidden_ability, hp, attack, defense,
     special_attack, special_defense speed FROM pokedex`
    //  LIMIT ?,?`, 
    // [
    //   String(offset),
    //   String(config.listPerPage)
    // ]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function getNames(){
  const rows = await db.query(
    `SELECT id, jp_name, en_name, ge_name, fr_name, kr_name FROM names`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {};

  return {
    data,
    meta
  }
}

module.exports = {
  getPokedex,
  getNames
}
