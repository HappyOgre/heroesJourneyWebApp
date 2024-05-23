import sqlite3 from 'sqlite3';
let sql = `SELECT AT_Name FROM movesets WHERE AT_Name is NOT NULL `;
const rowName = [];

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
                return rowName.push(row);
            });
        };
        console.log(rowName);
    })
});
/*
db.all(sql, [], (err, rows) => {
    if (err) {
        console.log(err.message);
    }
    rows.forEach((row) => {
        if (err) {
            console.log(err.message);
        };
    });
});
*/