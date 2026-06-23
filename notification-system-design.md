Stage 1
REST APIs (GET/POST/PATCH/DELETE)
WebSocket/SSE
Stage 2
Tables (students, notifications)
Indexing
Partitioning
Archiving
Stage 3
Bad SQL query
Optimized query
Index creation
Stage 4
Redis caching
Pagination
Architecture flow
Stage 5
Queue system (Kafka/RabbitMQ)
Workers (email/db/push)
Async processing
We implemented logging middleware to track system behavior.

### Features:
- Request logging
- Response logging
- Error logging

### Benefits:
- Debugging support
- Monitoring API flow
- Production observability

### Example:
[REQUEST] POST /notifications
[RESPONSE] 200 OK
[ERROR] Exception captured