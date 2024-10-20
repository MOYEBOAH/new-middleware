import { assert } from "console";
import connectDB from "../db.js";
const db = await connectDB();

export function getEvents() {
	try {
		const events = db
			.prepare("SELECT id,name,location,status,description FROM events")
			.all();
		console.log(events);
		return events;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to get events");
	}
}

export function getEvent(id) {
	try {
		//example sql injection
		// const event = db.prepare(`SELECT id,name,location,status,description FROM events WHERE id = ${id}`).get();

		const eventId = parseInt(id);
		const event = db
			.prepare(
				"SELECT id,name,location,status,description,date FROM events WHERE id = ?"
			)
			.get(eventId);
		return event;
	} catch (error) {
		throw new Error("Event not found");
	}
}

export function createEvent(event) {
	try {
		const result = db
			.prepare(
				"INSERT INTO events(name,location,status,description,date) VALUES(?,?,?,?,?)"
			)
			.run(
				event.name,
				event.location,
				event.status,
				event.description,
				event.date
			);
		return result.changes === 1;
	} catch (error) {
		throw new Error(`Failed to create event: ${error.message}`);
	}
}

export function updateEventUsingId(id, event) {
	const eventId = parseInt(id);
	try {
		const result = db
			.prepare(
				`UPDATE events SET name=?,location=?,status=?,description=?,date=? WHERE id=?`
			)
			.run(
				event.name,
				event.location,
				event.status,
				event.description,
				event.date,
				eventId
			);
		return result.changes === 1;
	} catch (error) {
		throw new Error(`Failed to update: ${error.message}`);
	}
}

export function updateEventUsingEvent(event) {
	try {
		const oldEvent = event.find((event) => event.id === id);
		if (oldEvent) {
			const eventIndex = events.findIndex((event) => event.id === id);
			events[eventIndex] = event;
		}
	} catch (error) {
		throw new Error(`Failed to update: ${error.meesage}`);
	}
}

export function deleteEvent(id) {
	try {
		const eventId = parseInt(id);
		const result = db
			.prepare("DELETE FROM events WHERE id = ?")
			.run(eventId);
		return result.changes === 1;
	} catch (error) {
		throw new Error(`Failed to delete event ${error.meesage}`);
	}
}
