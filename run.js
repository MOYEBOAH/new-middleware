import connectDB from "./db.js";
import {
	createEventsTable,
	createAttendeesTable,
	createEventAttendeesTable,
	InsertAttendeesData,
	InsertEventAttendeesData,
	InsertEventsData,
} from "./db.js";

(async function run() {
	const db = await connectDB();
	// await createEventsTable(db);
	// await createAttendeesTable(db);
	// await createEventAttendeesTable(db);
	await InsertEventsData(db);
	await InsertAttendeesData(db);
	await InsertEventAttendeesData(db);
	console.log("Tables created");
})();
