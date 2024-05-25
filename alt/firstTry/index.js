import sqlite3 from 'sqlite3';
//let sql = `SELECT AT_Name, field3, AT_Art, AT_Beschreibung, Damage FROM movesets WHERE AT_Name is NOT NULL AND Damage != '0,00'`;
let sql = `SELECT * FROM Beschwoerungen`
const rowName = [];
let attacksList = [];

//connect to DB
let db = new sqlite3.Database("dsa.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err.message);
    } else {
    console.log('Connected to the database.')
    }
})


db.serialize(() => {
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            rows.forEach((row) => {
                rowName.push(row);
            });
        console.log(rowName)
        }
    });
});