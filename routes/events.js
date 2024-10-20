import { Router } from "express";
import * as eventsController from "../controllers/events.controller.js";

const router = Router();

// GET /events
router.get("/", eventsController.getEvents);

router.get("/:id", eventsController.getEvent);

router.post("/", eventsController.createEvent);

router.put("/:id", eventsController.updateEvent);
router.patch("/:id", eventsController.updateEvent);

router.delete("/:id", eventsController.removeEvent);

export default router;
