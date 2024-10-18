// preload.js
const { contextBridge } = require('electron');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

// Ścieżka do pliku bazy danych
const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db = low(adapter);

// Inicjalizacja struktury bazy danych, jeśli plik jest pusty
db.defaults({ users: [] }).write();

// Expose APIs to the renderer process
contextBridge.exposeInMainWorld('api', {
  addUser: async (user) => {
    db.get('users').push(user).write();
    return { success: true };
  },
  getUser: async (userId) => {
    return db.get('users').find({ userId }).value();
  },
});