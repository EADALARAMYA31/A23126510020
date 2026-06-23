from datetime import datetime

weight = {
    "Placement": 3,
    "Result": 2,
    "Event": 1
}

def recency_score(days_old):
    if days_old <= 1:
        return 3
    elif days_old <= 3:
        return 2
    return 1


def compute_score(notification):
    type_score = weight.get(notification["type"], 0)
    time_score = recency_score(notification["days_old"])
    return type_score + time_score


def get_top_notifications(notifications):
    for n in notifications:
        n["score"] = compute_score(n)

    return sorted(notifications, key=lambda x: x["score"], reverse=True)[:10]
if __name__ == "__main__":
    notifications = [
        {"type": "Placement", "days_old": 1},
        {"type": "Event", "days_old": 2},
        {"type": "Result", "days_old": 3},
        {"type": "Placement", "days_old": 4},
        {"type": "Event", "days_old": 1}
    ]

    result = get_top_notifications(notifications)

    for r in result:
        print(r)