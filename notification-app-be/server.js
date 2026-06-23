const express = require("express");
const app = express();

app.use(express.json());

// in-memory database
let notifications = [];

// GET all notifications
app.get("/notifications", (req, res) => {
    res.json(notifications);
});

// POST notification
app.post("/notifications", (req, res) => {
    const data = req.body;
    notifications.push(data);
    res.json({ message: "Notification added", data });
});

// PATCH mark as read
app.patch("/notifications/:id", (req, res) => {
    const id = req.params.id;
    notifications[id] = { ...notifications[id], is_read: true };
    res.json({ message: "Marked as read" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});