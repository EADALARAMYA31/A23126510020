const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJlYWRhbGFyYW15YS4yMy5jc2VAYW5pdHMuZWR1LmluIiwiZXhwIjoxNzgyMTk5Mjk5LCJpYXQiOjE3ODIxOTgzOTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxMjI5ZmFhYS1iNjcxLTQyOTAtYjNlYi0wMzZjNDk1NGRmNDIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJlYWRhbGEgcmFteWEiLCJzdWIiOiJhNmQwMjdlOC04YjAzLTRiZTctODdiZi02MWVjZWQ4ZDE5ZDUifSwiZW1haWwiOiJlYWRhbGFyYW15YS4yMy5jc2VAYW5pdHMuZWR1LmluIiwibmFtZSI6ImVhZGFsYSByYW15YSIsInJvbGxObyI6ImEyMzEyNjUxMDAyMCIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6ImE2ZDAyN2U4LThiMDMtNGJlNy04N2JmLTYxZWNlZDhkMTlkNSIsImNsaWVudFNlY3JldCI6IlpHc0JSRnZ4WVdIZVFxREcifQ.KRFLr0QLec7TwY_FZOugyHy0MJf3Y8opjN7ujUuB--0"
async function loadNotifications() {
    try {
        const res = await fetch(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${TOKEN}`,
                    "Accept": "application/json"
                }
            }
        );

        console.log("STATUS:", res.status);

        const data = await res.json();
        console.log("API RESPONSE:", data);

        const notifications = Array.isArray(data)
            ? data
            : data.notifications || [];

        document.getElementById("list").innerHTML =
            notifications.map(n => `
                <div class="card">
                    <b>${n.type}</b><br/>
                    ${n.message}<br/>
                    <small>${n.timestamp}</small>
                </div>
            `).join("");

    } catch (error) {
        console.log("ERROR:", error);
    }
}
