// localDB.js
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Inicjalizacja struktury bazy danych
db.defaults({ users: [], plants: [], plantTypes: [] }).write();

module.exports = db;
