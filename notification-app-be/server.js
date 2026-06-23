const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// GET from PostgreSQL OR external API
app.get("/notifications", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT id, type, message, timestamp FROM notifications ORDER BY id DESC"
        );

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST notification
app.post("/notifications", async (req, res) => {
    const { type, message } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO notifications (type, message) VALUES ($1, $2) RETURNING *",
            [type, message]
        );

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});