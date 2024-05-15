const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

// MySQL connection configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

// Connect to MySQL
let pool;

async function connectToDatabase() {
    pool = await mysql.createPool(dbConfig);
    console.log('Connected to MySQL database');
}

connectToDatabase();

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Username:', username, 'Password:', password);
    try {
        const [rows] = await pool.execute('SELECT * FROM users WHERE username =? AND password =?', [username, password]);
        if (rows.length > 0) {
            console.log(rows);
            res.json({ message: 'Login successful', userId: rows.length  });
        } else {
            res.status(401).json({ message: 'Invalid credentials'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/programs', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM programs');
        //send data 
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching programs');
    }
});

app.post('/programs', async (req, res) => {
    const { name, description } = req.body;
    try {
        const [result] = await pool.execute('INSERT INTO programs (name, description) VALUES (?,?)', [name, description]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding program');
    }
});

app.put('/programs/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const [result] = await pool.execute('UPDATE programs SET name =?, description =? WHERE id =?', [name, description, id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating program');
    }
});

app.delete('/programs/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.execute('DELETE FROM programs WHERE id =?', [id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting program');
    }
});

app.get('/volunteers', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM volunteers');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching volunteers');
    }
});

app.post('/volunteers', async (req, res) => {
    const { name, email, mobileNumber, location } = req.body;
    try {
        const [result] = await pool.execute('INSERT INTO volunteers (name, email, mobileNumber, location) VALUES (?,?,?,?)', [name, email, mobileNumber, location]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding volunteer');
    }
});

// Assuming you have a 'donations' table in your database

app.get('/donations', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM donations');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching donations');
    }
});

app.post('/donations', async (req, res) => {
    console.log(req.body);
    const { name, email, amount } = req.body;
    console.log(name, amount, email);
    try {
        const [result] = await pool.execute('INSERT INTO donations (donorName, amount, date, email) VALUES (?,?,NOW(),?)', [name, amount, email]);
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding donation');
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
