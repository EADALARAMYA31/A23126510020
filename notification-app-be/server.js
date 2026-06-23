const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "notifications_db",
    password: "MYSQLramya31",
    port: 5432
});

// GET
app.get("/notifications", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM notifications ORDER BY created_at DESC"
    );
    res.json(result.rows);
});

// POST
app.post("/notifications", async (req, res) => {
    const { type, message } = req.body;

    const result = await pool.query(
        "INSERT INTO notifications (type, message) VALUES ($1, $2) RETURNING *",
        [type, message]
    );

    res.json({
        message: "Notification added",
        data: result.rows[0]
    });
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            message: "DB Connected Successfully",
            time: result.rows[0]
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});