const API = "http://localhost:3000/notifications";

// ADD
async function addNotification() {
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ type, message })
    });

    loadNotifications();
}

// LOAD
async function loadNotifications() {
    const res = await fetch(API);
    const data = await res.json();

    document.getElementById("list").innerHTML =
        data.map(n => `
            <div class="card">
                <b>${n.type}</b><br/>
                ${n.message}<br/>
                <small>${n.created_at}</small>
            </div>
        `).join("");
}

// auto load
loadNotifications();