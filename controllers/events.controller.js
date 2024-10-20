import * as eventService from "../services/events.service.js";

const responseFormat = {
	status: "success",
	message: "Event created successfully",
	data: {},
	error: {},
};

let response = {};

export const getEvents = (req, res) => {
	// if using database, you would call the service here
	const events = eventService.getEvents();
	res.status(200).json({
		status: "success",
		data: events,
		message: "Events retrieved successfully",
	});
};

export const getEvent = (req, res) => {
	const { id } = req.params;
	const event = eventService.getEvent(id);
	if (event) {
		res.status(200).json({
			success: "success",
			message: "Event found",
			data: event,
		});
	} else {
		res.status(404).json({
			success: "error",
			message: "Event not found",
			data: {},
		});
	}
};

export const createEvent = (req, res) => {
	const event = req.body;
	const result = eventService.createEvent(event);
	if (!result) {
		return res.status(400).json({ message: "Failed to create event" });
	}
	res.status(201).json({
		status: "success",
		message: "Event created successfully",
		data: event,
	});
};

export const updateEvent = (req, res) => {
	const id = req.params.id;
	const event = req.body;
	const result = eventService.updateEventUsingId(id, event);
	if (!result) {
		return res.status(400).json({ message: "Failed to update event" });
	}
	res.status(200).json({
		status: "success",
		message: "Event updated successfully",
		data: event,
	});
};

export const removeEvent = (req, res) => {
	const id = req.params.id;
	const result = eventService.deleteEvent(id);
	if (!result) {
		return res.status(400).json({
			status: "error",
			message: "Failed to delete event",
			data: {},
		});
	}
	res.status(204).json(result);
};
