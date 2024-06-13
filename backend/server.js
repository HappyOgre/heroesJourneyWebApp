import express from 'express';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3001; // Ändern Sie den Port, um Konflikte mit Vite zu vermeiden

export const db = new sqlite3.Database(join(__dirname, 'test.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Fehler beim Verbinden zur Datenbank:', err.message);
    } else {
        console.log('Verbunden mit der Datenbank.');
    }
});

app.use(cors());
app.use(express.json());

app.get('/api/stats', (req, res) => {
    const query = 'SELECT * FROM stats';
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ stats: rows });
    });
});

const updateAttribute = (attribute) => {
    return (req, res) => {
        const newValue = req.body[`new${attribute.charAt(0).toUpperCase() + attribute.slice(1)}`];
        const newAttributePoints = req.body.newAttributePoints;

        db.serialize(() => {
            db.run('BEGIN TRANSACTION');
            db.run(`UPDATE stats SET ${attribute} = ?`, [newValue], (err) => {
                if (err) {
                    db.run('ROLLBACK');
                    console.error(`Aktualisieren von ${attribute} fehlgeschlagen: `, err.mesasge);
                    return res.status(500).json({ error: 'AT update failed' });
                }
            
            db.run('UPDATE stats SET attributePoints = ?', [newAttributePoints], (err) => {
                if (err) {
                    db.run('ROLLBACK');
                    console.error('Aktualisieren der Attributepunkte fehlgeschlagen: ', err.message);
                    return res.status(500).json({ error: 'AP update failed' });
                }
            
            db.run('COMMIT', (err) => {
                if (err) {
                    console.error('Fehler beim Commit: ', err.message);
                    return res.status(500).json({ error: 'Commit failed' });
                }
                res.json({ message: `${attribute} und AP aktualisiert`, newValue, newAttributePoints});
            });
            });
            });
        });
    };
};

const attributes = ['stamina', 'agility', 'wisdom', 'strength', 'intelligence', 'spirit'];

attributes.forEach(attribute => {
    app.post(`/api/update${capitalize(attribute)}`, updateAttribute(attribute));
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/*
app.post('/api/updateStamina', updateAttribute('stamina'));
app.post('/api/updateAgility', updateAttribute('agility'));
app.post('/api/updateWisdom', updateAttribute('wisdom'));
app.post('/api/updateStrength', updateAttribute('strength'));
app.post('/api/updateIntelligence', updateAttribute('intelligence'));
app.post('/api/updateSpirit', updateAttribute('spirit'));
*/

const updateTalent = (talent) => {
    return (req, res) => {
        const newValue = req.body[`new${talent.charAt(0).toUpperCase() + talent.slice(1)}`];
        const newTalentPoints = req.body.newTalentPoints;
        db.run('BEGIN TRANSACTION');
        db.run(`UPDATE stats SET ${talent} = ?`, [newValue], (err) => {
            if (err) {
                db.run('ROLLBACK');
                console.error(`Aktualisieren von ${talent} fehlgeschlagen: `, err.message);
                return res.status(500).json({ error: 'Talent update failed' });
            }
        db.run('UPDATE stats SET talentPoints = ?', [newTalentPoints], (err) => {
            if (err) {
                db.run('ROLLBACK');
                console.error('Aktualisieren der Talentpunkte fehlgeschlagen: ', err.message);
                return res.status(500).json({ error: 'TP update failed' });
            }

        db.run('COMMIT', (err) => {
            if (err) {
                console.error('Fehler beim Commit: ', err.message);
                return res.status(500).json({ error: 'Commit failed' });
            }
        res.json({ message: `${talent} und TP aktualisiert`, newValue, newTalentPoints});
        });
        });
        });
    };
};

const talents = ['ark', 'uns', 'wis', 'uezg', 'mgw', 'esc', 'mnk', 'whn', 'akr', 'scl', 'ffk', 
    'taeu', 'fwk', 'atl', 'wnl', 'alc', 'uelk', 'hka', 'rlg', 'thb', 'sam', 'gwk', 'sch', 'fln'
];

talents.forEach(talent => {
    app.post(`/api/update${capitalize(talent)}`, updateTalent(talent));
});


app.get('/api/arthaniaMoveset', (req, res) => {
    const query = `SELECT Name, Form, field3, AT_Name, AT_Art, AT_Beschreibung, CD, BS_PB, AT_DMG_1, "%AT1", AT_DMG_2, "%AT2", AT_DMG_3, Damage
    FROM movesets WHERE Name = 1 AND AT_Name IS NOT null`

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Loading moveset failed' });
        }
        res.json({ arthania: rows});
    });
});

app.get('/api/items', (req, res) => {
    const query = 'SELECT * FROM items'

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Loading items failed' })
        }
        res.json({ items: rows })
    })
})

app.get('/api/character/arthania', (req, res) => {
    const query = 'SELECT * FROM character WHERE ID = 1'

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: 'Loading arthania failed' })
        }
        res.json({ character: rows })
    })
})

/* 
app.post('/api/updateStamina', (req, res) => {
    const newStamina = req.body.newStamina;
    const newTalentPoints= req.body.newTalentPoints

    db.run(`UPDATE arthania SET stamina = ${newStamina}`);
    db.run(`UPDATE arthania SET talentPoints = ${newTalentPoints}`);
    res.json({ message: 'Stamina und TP aktuallisiert', newStamina, newTalentPoints });
});

app.post('/api/updateAgility', (req, res) => {
    const newAgility = req.body.newAgility;
    const newTalentPoints= req.body.newTalentPoints

    db.run(`UPDATE arthania SET agility = ${newAgility}`);
    db.run(`UPDATE arthania SET talentPoints = ${newTalentPoints}`);
    res.json({ message: 'agility und TP aktuallisiert', newAgility, newTalentPoints });
});

app.post('/api/updateWisdom', (req, res) => {
    const newWisdom = req.body.newWisdom;
    const newTalentPoints= req.body.newTalentPoints

    db.run(`UPDATE arthania SET Wisdom = ${newWisdom}`);
    db.run(`UPDATE arthania SET talentPoints = ${newTalentPoints}`);
    res.json({ message: 'Wisdom und TP aktuallisiert', newWisdom, newTalentPoints });
});

app.post('/api/updateStrength', (req, res) => {
    const newStrength = req.body.newStrength;
    const newTalentPoints= req.body.newTalentPoints

    db.run(`UPDATE arthania SET Strength = ${newStrength}`);
    db.run(`UPDATE arthania SET talentPoints = ${newTalentPoints}`);
    res.json({ message: 'Strength und TP aktuallisiert', newStrength, newTalentPoints });
});

app.post('/api/updateIntelligence', (req, res) => {
    const newIntelligence = req.body.newIntelligence;
    const newTalentPoints= req.body.newTalentPoints

    db.run(`UPDATE arthania SET Intelligence = ${newIntelligence}`);
    db.run(`UPDATE arthania SET talentPoints = ${newTalentPoints}`);
    res.json({ message: 'Intelligence und TP aktuallisiert', newIntelligence, newTalentPoints });
});

app.post('/api/updateSpirit', (req, res) => {
    const newSpirit = req.body.newSpirit;
    const newTalentPoints= req.body.newTalentPoints

    db.run(`UPDATE arthania SET Spirit = ${newSpirit}`);
    db.run(`UPDATE arthania SET talentPoints = ${newTalentPoints}`);
    res.json({ message: 'Spirit und TP aktuallisiert', newSpirit, newTalentPoints });
});
*/

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});