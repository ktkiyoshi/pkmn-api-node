const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPokedex(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT poke_id, full_name FROM pokedex`
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

  return {
    data
  }
}

module.exports = {
  getPokedex,
  getNames
}
