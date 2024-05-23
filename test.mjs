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

let sql = `select field3 from movesets`;
db.serialize(() =>{
    db.all(sql, [], (err, row) => {
        if (err) {
            console.log(err.message);
        }
        row.forEach((row) => {
            console.log(row.name);
        });
    })});