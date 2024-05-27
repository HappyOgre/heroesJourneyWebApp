// In einer Serverdatei (z.B. server.js oder db.js)
import sqlite3 from 'sqlite3';

// Erstelle die Verbindung zur Datenbank
const db = new sqlite3.Database('./heroesJourney.db', (err) => {
  if (err) {
    console.error('Fehler beim Verbinden zur Datenbank:', err.message);
  } else {
    console.log('Verbunden mit der Datenbank.');
  }
});

export default db;
