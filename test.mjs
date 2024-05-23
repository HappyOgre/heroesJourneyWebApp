import sqlite3 from "sqlite3"
const dbName = "./dsa.db"

let db = new sqlite3.Database(dbName, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected")
    }
})

let sql = `SELECT name FROM movesets`;

db.all(sql, [], (err, rows) => {
    if (err) {
        console.log(err.message);
    }
    rows.forEach((row) => {
        console.log(row.name);
    });
});