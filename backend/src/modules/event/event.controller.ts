import { Request, Response } from 'express';
import { CreateEventDto } from './dto/create-event.dto';
import { EventService } from './event.service';
import { UpdateEventDto } from './dto/update-event.dto';

export class EventController {
  public constructor(private readonly eventService: EventService) {}

  public async createEvent(req: Request, res: Response) {
    const body: CreateEventDto = req.body;

    const event = await this.eventService.createEvent(body);

    return res.status(event.status).json(event);
  }

  public async getEvents(req: Request, res: Response) {
    const amount = Number(req.query.amount) || 5;
    const page = Number(req.query.page) || 1;

    const events = await this.eventService.getEvents(amount, page);

    return res.status(events.status).json(events);
  }

  public async getEventById(req: Request, res: Response) {
    const eventId = req.params.eventId;

    const event = await this.eventService.getEventById(eventId);

    return res.status(event.status).json(event);
  }

  public async updateEventById(req: Request, res: Response) {
    const eventId = req.params.eventId;
    const body: UpdateEventDto = req.body;

    const event = await this.eventService.updateEventById(eventId, body);

    return res.status(event.status).json(event);
  }

  public async deleteEventById(req: Request, res: Response) {
    const eventId = req.params.eventId;

    const event = await this.eventService.deleteEventById(eventId);

    return res.status(event.status).json(event);
  }
}
