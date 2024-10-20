const express = require("express");
const EventRouter = require("./routes/events.js");
const logger = require("./middlewares/logger.js");

const app = express();
const PORT = 3000;

// Use logger middleware
app.use(logger);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/events", EventRouter);

// Time endpoint
app.get("/api/time", (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

// Attendees array to hold our attendees
let attendees = [];

// Attendees CRUD routes
app.get("/api/attendees", (req, res) => {
  res.json(attendees);
});

app.post("/api/attendees", (req, res) => {
  const newAttendee = req.body;
  attendees.push(newAttendee);
  res.status(201).json(newAttendee);
});

app.get("/api/attendees/:id", (req, res) => {
  const attendee = attendees.find(att => att.id === req.params.id);
  if (attendee) {
    res.json(attendee);
  } else {
    res.status(404).json({ message: "Attendee not found" });
  }
});

app.put("/api/attendees/:id", (req, res) => {
  const index = attendees.findIndex(att => att.id === req.params.id);
  if (index !== -1) {
    attendees[index] = req.body;
    res.json(attendees[index]);
  } else {
    res.status(404).json({ message: "Attendee not found" });
  }
});

app.delete("/api/attendees/:id", (req, res) => {
  const index = attendees.findIndex(att => att.id === req.params.id);
  if (index !== -1) {
    const deletedAttendee = attendees.splice(index, 1);
    res.json(deletedAttendee);
  } else {
    res.status(404).json({ message: "Attendee not found" });
  }
});

// Route not found
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
