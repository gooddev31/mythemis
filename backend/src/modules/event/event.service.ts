import Event from '../../models/event.model';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

export class EventService {
  public async createEvent(createEventDto: CreateEventDto) {
    const event = await Event.create(createEventDto);

    return {
      message: 'Event was created',
      data: {
        event
      },
      status: 201
    };
  }

  public async getEvents(amount: number, page: number) {
    const events = await Event.find()
      .limit(amount)
      .skip((page - 1) * amount + page - 1 === 0 ? null : 1);

    return {
      message: 'Events were created',
      data: {
        events
      },
      status: 201
    };
  }

  public async getEventById(id: string) {
    const event = await Event.findById(id);

    if (!event) {
      return {
        message: 'Event not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'Event was found',
      data: {
        event
      },
      status: 200
    };
  }

  public async updateEventById(id: string, updates: UpdateEventDto) {
    const event = await Event.findByIdAndUpdate(id, updates);

    if (!event) {
      return {
        message: 'Event not found',
        data: null,
        status: 404
      };
    }

    return {
      message: 'Event was found',
      data: {
        event
      },
      status: 404
    };
  }

  public async deleteEventById(id: string) {
    const event = await Event.findById(id);

    if (!event) {
      return {
        message: 'Event not found',
        data: null,
        status: 404
      };
    }

    await Event.deleteOne({ id: event.id });

    return {
      message: 'Event was deleted',
      data: null,
      status: 200
    };
  }
}
