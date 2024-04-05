import * as mongoose from 'mongoose';
import Event, { Status } from '../common/interfaces/event.interface';

const EventSchema = new mongoose.Schema<Event>({
  title: {
    type: String,
    required: true
  },
  timeline: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: Status,
    default: Status.ACTIVE
  }
});

const EventModel = mongoose.model('Event', EventSchema);

export default EventModel;
