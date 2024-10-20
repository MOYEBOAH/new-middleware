CREATE TABLE events(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT NOT NULL
    description TEXT NOT NULL
)

CREATE TABLE attendees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
);

-- joining table for attendees and events
CREATE TABLE event_attendees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    attendee_id INTEGER NOT NULL,
    FOREIGN KEY(event_id) REFERENCES events(id),
    FOREIGN KEY(attendee_id) REFERENCES attendees(id)
);

-- insert event_attendees
INSERT INTO event_attendees(event_id, attendee_id) VALUES(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10);

-- insert events
INSERT INTO events(name, date, location, status, description) VALUES('Event 1', '2021-01-01', 'Location 1', 'Active', 'Description 1'), ('Event 2', '2021-01-02', 'Location 2', 'Active', 'Description 2'), ('Event 3', '2021-01-03', 'Location 3', 'Active', 'Description 3'), ('Event 4', '2021-01-04', 'Location 4', 'Active', 'Description 4'), ('Event 5', '2021-01-05', 'Location 5', 'Active', 'Description 5'), ('Event 6', '2021-01-06', 'Location 6', 'Active', 'Description 6'), ('Event 7', '2021-01-07', 'Location 7', 'Active', 'Description 7'), ('Event 8', '2021-01-08', 'Location 8', 'Active', 'Description 8'), ('Event 9', '2021-01-09', 'Location 9', 'Active', 'Description 9'), ('Event 10', '2021-01-10', 'Location 10', 'Active', 'Description 10');

-- insert attendees
INSERT INTO attendees(name, email, phone) VALUES('Attendee 1', 'john@gmail.com', '123456789',1), ('Attendee 2', 'john@gmail.com', '123456789'),('Attendee 3', 'john@gmail.com', '123456789'),('Attendee 4', 'john@gmail.com', '123456789'),('Attendee 5', 'john@gmail.com', '123456789')

