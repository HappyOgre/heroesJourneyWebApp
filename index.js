import sqlite3 from 'sqlite3';
let sql = `SELECT name FROM movesets`;

//connect to DB
let db = new sqlite3.Database("dsa.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err.message);
    } else {
    console.log('Connected to the database.')
    }
})


db.serialize(() => {
    db.all(sql, (err) => {
        if (err) {
            console.log(err.message);
        }
        
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