const express = require("express");
const app = express();

app.use(express.json());

let notifications = [];

// GET
app.get("/notifications", (req, res) => {
    res.json(notifications);
});

// POST
app.post("/notifications", (req, res) => {
    const data = req.body;

    // ADD ID (IMPORTANT FIX)
    const newNotification = {
        id: notifications.length,
        message: data.message,
        type: data.type,
        is_read: false
    };

    notifications.push(newNotification);

    res.json({
        message: "Notification added",
        data: newNotification
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});