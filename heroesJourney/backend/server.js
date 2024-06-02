import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001; // Ändern Sie den Port, um Konflikte mit Vite zu vermeiden

export const db = new sqlite3.Database(join(__dirname, 'test.db'), sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('Fehler beim Verbinden zur Datenbank:', err.message);
    } else {
        console.log('Verbunden mit der Datenbank.');
    }
});

app.use(cors());
app.use(express.json());

app.get('/api/arthania', (req, res) => {
    const query = 'SELECT * FROM arthania';
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ arthania: rows });
    });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
