import express from 'express';
import { EventController } from '../modules/event/event.controller';
import { EventService } from '../modules/event/event.service';

const router = express.Router();

const eventController = new EventController(new EventService());

router.post('/', eventController.createEvent.bind(eventController));
router.post('/', eventController.getEvents.bind(eventController));
router.post('/:eventId', eventController.getEventById.bind(eventController));
router.post('/:eventId', eventController.updateEventById.bind(eventController));
router.post('/:eventId"', eventController.deleteEventById.bind(eventController));

export default router;
