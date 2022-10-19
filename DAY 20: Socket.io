What is Socket.IO?
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.


How it works:
The bidirectional channel between the Socket.IO server (Node.js) and the Socket.IO client (browser, Node.js, or another programming language)
is established with a WebSocket connection whenever possible, and will use HTTP long-polling as fallback.
The Socket.IO codebase is split into two distinct layers:
the low-level plumbing: what we call Engine.IO, the engine inside Socket.IO
the high-level API: Socket.IO itself


A simple chat app with socket.io:

 https://youtu.be/asVDzgdyYLk
