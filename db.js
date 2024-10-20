import sqlite from "node:sqlite";

//connect to the database
async function connectDB() {
	const db = new sqlite.DatabaseSync("./eventsDB.db");
	console.log("Database connected");
	return db;
}

export async function createEventsTable(db) {
	db = await connectDB();
	await db.exec(
		`CREATE TABLE events(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT NOT NULL,
    description TEXT NOT NULL)`
	);
}

export async function createAttendeesTable(db) {
	db = await connectDB();
	await db.exec(
		`CREATE TABLE attendees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL
    );`
	);
}

export async function createEventAttendeesTable(db) {
	db = await connectDB();
	await db.exec(
		`CREATE TABLE event_attendees(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    attendee_id INTEGER NOT NULL,
    FOREIGN KEY(event_id) REFERENCES events(id),
    FOREIGN KEY(attendee_id) REFERENCES attendees(id)
);`
	);
}

export async function InsertEventsData(db) {
	db.exec(
		`INSERT INTO events(name, date, location, status, description) VALUES('Event-1', '2022-03-01', 'Accra', 'Active', 'This is the first event');`
	);
	db.exec(
		`INSERT INTO events(name, date, location, status, description) VALUES('Event-2', '2022-04-01', 'Kumasi', 'Active', 'This is the second event');`
	);
	db.exec(
		`INSERT INTO events(name, date, location, status, description) VALUES('Event-3', '2022-05-01', 'Takoradi', 'Active', 'This is the third event');`
	);
}

export async function InsertAttendeesData(db) {
	db.exec(
		`INSERT INTO attendees(name, email, phone) VALUES('Attendee 1', 'john@gmail.com', '123456789'), ('Attendee 2', 'john@gmail.com', '123456789'),('Attendee 3', 'john@gmail.com', '123456789'),('Attendee 4', 'john@gmail.com', '123456789'),('Attendee 5', 'john@gmail.com', '123456789')`
	);
}

export async function InsertEventAttendeesData(db) {
	db.exec(
		`INSERT INTO event_attendees(event_id, attendee_id) VALUES(1,1), (2,2),(3,3),(1,4),(2,5)`
	);
}
export default connectDB;
