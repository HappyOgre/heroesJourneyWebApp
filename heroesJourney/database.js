import sqlite3 from 'sqlite3';


// Erstelle die Verbindung zur Datenbank
export const db = new sqlite3.Database('..\\heroesJourneyWebApp\\heroesJourney\\test.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Fehler beim Verbinden zur Datenbank:', err.message);
  } else {
    console.log('Verbunden mit der Datenbank.');
  }
});

export  function getData(query) {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        console.error('Fehler beim Query: ', err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
/*
export function fetchDataAndSaveToFile(db, query, outputFile = 'arthania.json') {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(query, (err, rows) => {
        if (err) {
          console.error('Fehler beim Query: ', err.message)
          reject(err.message);
        } else {
          fs.writeFileSync(outputFile, JSON.stringify(rows, null, 2), 'utf-8');
          resolve('Daten erfolgreich gespeichert in ' + outputFile);
        }
    });
  });
}
)}
*/

export function closeDatabase() {
  db.close((err) => {
    if (err) {
      console.error('Fehler beim Schließen: ', err.message);
    } else {
      console.log('Verbindung geschlossen.');
    }
  });
}


